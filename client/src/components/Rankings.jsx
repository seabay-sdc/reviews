import React from 'react';
import './styling.css';
import ReactStars from 'react-stars'


const Rankings = (props) => (
    <div className="containerR">
        <div>
        <h3 id="numAvg">{props.avgScore}</h3>
        <ReactStars
            count={5}
            value={props.avgScore}
            size={24}
            color1={'#C3C3C2'}
            color2={'#E8952A'} 
        />
        <h5>{props.numRev} Product Rankings</h5>
        </div>
        <img id="starFillR" src="https://i.imgur.com/jH8EcjX.png"></img>
        <img id="threePieR" src="https://i.imgur.com/Svm5WVP.png"></img>
    </div>
  );


  export default Rankings 

