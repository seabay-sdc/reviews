import React from 'react';
import './styling.css';
import Button from './Button.jsx'
import Rankings from './Rankings.jsx'

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
      <div className="item"> <Button /></div>
      </div>
      <hr></hr>
      <br></br>
      <div><Rankings /></div>
      <hr></hr>
      <br></br>
      <div className="container">
      <div className="item">4</div>
      <div className="item">5</div>
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