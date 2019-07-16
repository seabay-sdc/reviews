import React from 'react';
import axios from 'axios'
import './styling.css';
import Button from './Button.jsx'
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
    });
    self.getItem()
  }


  getItem() {
    axios.get(`http://ec2-52-15-94-164.us-east-2.compute.amazonaws.com:3004/id/${this.state.id}`)
    .then(function (response) {
    this.setState({ reviews: response.data})
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
      <div> <Button /></div>
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