import React from 'react';
import './styling.css';
import ReactStars from 'react-stars'
import ProgressBar from 'react-bootstrap/ProgressBar'


const Rankings = (props) => (
    <div className="reviewSumR">
        {/* <div className="oneColR">1</div> */}
        <div className="oneColR">
            <center><h3 id="numAvg">{props.avgScore}</h3>
            <div id="reactStars"><ReactStars
                count={5}
                value={props.avgScore}
                size={24}
                color1={'#ECEBEB'}
                color2={'#E8952A'} 
            /></div>
            <br></br>
            <h5>{props.numRev} Product Rankings</h5></center>
        </div>
        {/* <div className="oneColR">2</div> */}
        {/* <img id="starFillR" src="https://i.imgur.com/jH8EcjX.png"></img> */}
        <div className="oneColR">


        </div>
        <div className="oneColR" id="graphBarsR">
            <ProgressBar  now={40} label={`5 Star`}  />
            <br></br>
            <ProgressBar  now={20} label={`4 Star`} />
            <br></br>
            <ProgressBar  now={60} label={`3 Star`}  />
            <br></br>
            <ProgressBar  now={80} label={`2 Star`} />
            <br></br>
            <ProgressBar  now={80} label={`1 Star`} />
        </div>
        <div className="oneColR">


        </div>
        <div className="oneColR">3</div>
        {/* <img id="threePieR" src="https://i.imgur.com/Svm5WVP.png"></img> */}
    </div>
  );


  export default Rankings 

