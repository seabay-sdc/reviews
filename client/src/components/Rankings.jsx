import React from 'react';
import './styling.css';
import totalScore from './totalscore.png'
import StarFill from './starfillup.png'
import ThreeCharts from './threeCharts.png'


const Rankings = () => (
    <div className="container">
        <img id="total" src={totalScore}></img>
        <img id="starFill" src={StarFill}></img>
        <img id="threePie" src= {ThreeCharts}></img>
    </div>
  );


  export default Rankings 