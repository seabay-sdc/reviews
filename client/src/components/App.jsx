import React from 'react';
import './styling.css';
import Button from './Button.jsx'
import Rankings from './Rankings.jsx'
import SeeReviews from './seeReviews.jsx'

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      id: 0
    }
    //bind functions here
  }


  render () {
    return (
      <div>
      <div className="headcontainer">
      <div id="title" >Ratings and Reviews</div>
      <div className="item"></div>
      <div> <Button /></div>
      </div>
      <hr></hr>
      <br></br>
      <div><Rankings /></div>
      <hr></hr>
      <div className="container">
      <div id="subtitle" >Most Relevant Reviews</div>
      <div className="item"></div>
      <div > <SeeReviews /></div>
      <div className="item">6</div>
      <div className="item">7</div>
      <div className="item">8</div>
      <div className="item">9</div>
      </div>
      </div>
    )
  }
}

export default App;