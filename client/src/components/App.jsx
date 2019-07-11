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
      id: 0,
      reviews: []
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    const self = this
    axios.get('/test')
      .then(function (response) {
      self.setState({ reviews: response.data})
    })
      .catch(function (error) {
      console.log(error);
    });
  }


  render () {
    return (
      <div>
      <div className="headcontainer">
      <div id="title" >Ratings and Reviews</div>
      <div></div>
      <div> <Button /></div>
      </div>
      <hr></hr>
      <br></br>
      <div><Rankings /></div>
      <hr></hr>
      <div className="container">
      <div id="subtitle" >Most Relevant Reviews</div>
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