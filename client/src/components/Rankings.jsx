import React from 'react';
import './styling.css';
import totalScore from './images/totalscore.png'
import StarFill from './images/starfillup.png'
import ThreeCharts from './images/threeCharts.png'


const Rankings = () => (
    <div className="container">
        <img id="total" src={totalScore}></img>
        <img id="starFill" src={StarFill}></img>
        <img id="threePie" src= {ThreeCharts}></img>
    </div>
  );


  export default Rankings 