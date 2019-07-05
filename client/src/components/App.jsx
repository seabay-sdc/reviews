import React from 'react';
import './styling.css';
import Header from './Header.jsx'

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
      <div className="container">
      <div id="title" className="item">Ratings and Reviews</div>
      <div className="item">2</div>
      <div className="item">3</div>
      <div className="item">4</div>
      <div className="item">5</div>
      <div className="item">6</div>
      <div className="item">7</div>
      <div className="item">8</div>
      <div className="item">9</div>
    </div>
     
    )
  }
}

export default App;