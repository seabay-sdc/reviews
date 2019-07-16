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
      reviews: [],
      show: false
    }
    this.getItem = this.getItem.bind(this)
    this.showModal = this.showModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
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

  showModal () {
    this.setState({ show: true });
  }

  hideModal () {
    this.setState({ show: false });
  }



  render () {
    return (
      <div>
      <div className="headcontainerR">
      <div id="titleR" >Ratings and Reviews</div>
      <div></div>
      {/* <div> <button type="button" onClick={this.showModal}></button> <WriteRev show={this.state.show} handleClose={this.hideModal}/></div> */}
  
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