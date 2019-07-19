import React from 'react';
import axios from 'axios'
import Modal from 'react-modal';
import './styling.css';
import WriteRev from './WriteReview.jsx'
import Rankings from './Rankings.jsx'
import SeeReviews from './seeReviews.jsx'
import Reviews from './reviews.jsx'
// import { array } from '../../../../../../Library/Caches/typescript/3.5/node_modules/@types/prop-types';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      id: 0,
      reviews: [],
      showModal: false,
      avgScore: 0,
      reviewObj: []
    }
    this.getItem = this.getItem.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios.get(`http://ec2-52-15-94-164.us-east-2.compute.amazonaws.com:3004/id/${this.state.id}`)
    .then((response) => {
      const sortedReview = this.mergeSort(response.data)
      this.setState({ reviews: sortedReview })
    })
    .then(() => {
        this.averageScoreCalc(this.state.reviews)
    })
    .then(() => {
      this.scoreCount(this.state.reviews)
    })
    .then(() => {
      this.setCurrentReview(this.state.avgScore)
    })
    .catch((error) => {
      console.log(error)
    });

    document.addEventListener('setCurrentItem', data => {
      this.setState({ id : data.detail.id })
      this.getItem()
    });
  }


  handleSubmit (newReview,newUser,newTitle, newScore) {
    event.preventDefault()
    const d = new Date();
    const presDate = d.toLocaleDateString();
    const toSend = {
      id: this.state.id,
      title: newTitle,
      review: newReview,
      name: newUser,
      date: presDate,
      score: newScore
      }
    return this.postReview(toSend) 
      .then(() => {
        this.getItem();
      })
  }

 postReview(newRev) {
    return axios.post(`http://ec2-52-15-94-164.us-east-2.compute.amazonaws.com:3004/newReview`,{
    newRev})
    .then(function(response){
      console.log('sent')
    }) 
    .catch(function (error) {
      console.log(error)
    })
  }

  getItem() {
     return axios.get(`http://ec2-52-15-94-164.us-east-2.compute.amazonaws.com:3004/id/${this.state.id}`)
      .then((response) => {
        const sortedReview = this.mergeSort(response.data)
        this.setState({ reviews: sortedReview})
      })
      .then(() => {
        this.averageScoreCalc(this.state.reviews)
      })
      .then(() => {
        this.scoreCount(this.state.reviews)
      })
      .then(() => {
        this.setCurrentReview(this.state.avgScore)
      })
    .catch(function (error) {
      console.log(error)
  })
}

setCurrentReview (score) {
  const averageScore = { averageScore: { score } };
  const event = new CustomEvent('setCurrentScore', averageScore);
  document.dispatchEvent(event);
}

  averageScoreCalc (arr) {
    let count = arr.length;
    let totalscore = 0
    for (let i=0; i < arr.length; i++) {
      totalscore += arr[i].score
    }
    const result = Math.round((totalscore/count) * 10) / 10
    this.setState({avgScore: result})
  }

  scoreCount (arr) {
    const scoreTally = [{1:0,2:0,3:0,4:0,5:0}]
    for (let i =0; i < arr.length; i++) {
      scoreTally[0][arr[i].score]++
    }
    this.setState({ reviewObj : scoreTally[0] })
  }

  mergeSort (arr) {
    if (arr.length <= 1) return arr;
    var mid = Math.floor(arr.length/2);
    var left = this.mergeSort(arr.slice(0,mid));
    var right = this.mergeSort(arr.slice(mid));
    return this.merge(left, right);
  };
  
   merge (arr1, arr2) {
    var result = [];
    let i = 0;
    let x = 0;
    while (i < arr1.length && x < arr2.length) {
      if (arr2[x].date < arr1[i].date) {
        result.push(arr1[i]);
        i++
      } else {
        result.push(arr2[x]);
        x++
      } 
    } while (i <arr1.length) {
      result.push(arr1[i])
      i++
    } while (x< arr2.length) {
      result.push(arr2[x]) 
        x++
    }
    return result;
  }


  render () {
    return (
      <div>
      <div className="headcontainerR">
      <div id="titleR" >Ratings and Reviews</div>
      <div></div>
      <div> <WriteRev show={this.state.show} handleClose={this.hideModal} 
      handleSubmit={this.handleSubmit} /></div>
      </div>
      <hr></hr>
      <br></br>
      <div><Rankings tally={this.state.reviewObj} avgScore={this.state.avgScore} numRev={this.state.reviews.length}/></div>
      <hr></hr>
      <div className="containerR">
      <div id="subtitleR" >Most Relevant Reviews</div>
      <div></div>
      <SeeReviews />
      </div>
      <br></br>
      <Reviews list={this.state.reviews}/>
      </div>
    )
  }
}

export default App;