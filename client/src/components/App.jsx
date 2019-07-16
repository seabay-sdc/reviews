import React from 'react';
import axios from 'axios'
import Modal from 'react-modal';
import './styling.css';
import WriteRev from './WriteReview.jsx'
import Rankings from './Rankings.jsx'
import SeeReviews from './seeReviews.jsx'
import Reviews from './reviews.jsx'

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      id: 5,
      reviews: []
    }
    this.getItem = this.getItem.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const self = this
    axios.get(`http://ec2-52-15-94-164.us-east-2.compute.amazonaws.com:3004/id/${self.state.id}`)
      .then(function (response) {
      self.setState({ reviews: response.data})
    })
      .catch(function (error) {
      console.log(error)
    })
    document.addEventListener('setCurrentItem', data => {
      self.setState({id : data.detail.id})
      this.getItem()
    });
  }


  handleSubmit (newReview,newUser,newTitle) {
  return event => {
    event.preventDefault()
    const d = new Date();
    const presDate = d.toLocaleDateString();
    const toSend = {
      id: this.state.id,
      title: newTitle,
      review: newReview,
      name: newUser,
      date: presDate
      }
    this.postReview(toSend)
    }
  }

postReview(newRev) {
    axios.post(`http://ec2-52-15-94-164.us-east-2.compute.amazonaws.com:3004/newReview`,{
    newRev})
    .then(function(response){
      console.log('sent')
    }) 
    .catch(function (error) {
      console.log(error)
    })
}

  getItem() {
    const self = this
    axios.get(`http://ec2-52-15-94-164.us-east-2.compute.amazonaws.com:3004/id/${self.state.id}`)
    .then(function (response) {
    self.setState({ reviews: response.data})
  })
    .catch(function (error) {
    console.log(error)
  })
  }




  render () {
    return (
      <div>
      <div className="headcontainerR">
      <div id="titleR" >Ratings and Reviews</div>
      <div></div>
      <div> <WriteRev show={this.state.show} handleClose={this.hideModal} 
      handleSubmit={this.handleSubmit}/></div>
      </div>
      <hr></hr>
      <br></br>
      <div><Rankings /></div>
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