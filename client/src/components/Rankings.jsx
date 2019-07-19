import React from 'react';
import './styling.css';
import ReactStars from 'react-stars'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { CircularProgressbar } from 'react-circular-progressbar';


const Rankings = (props) => (
    
    <div className="reviewSumR">
        <div id="mainSumReview" className="oneColR">
        <h3 id="numAvg">{props.avgScore}</h3>
            <div id="reactStars">
                <ReactStars
                count={5}
                value={props.avgScore}
                size={24}
                color1={'#ECEBEB'}
                color2={'#E8952A'} 
                edit={false}
            
            /></div>
            <br></br>
            <h5 id="rankingCount">{props.numRev} Product Rankings</h5>
        </div>
        <div id= "colRatingRows" className="oneColR">
        <ReactStars
            count={1}
            vale={1}
            size={12}
            color1={'#767676'}
            color2={'#767676'} 
            edit={false} 
        />
        <ReactStars
            count={1}
            vale={1}
            size={12}
            color1={'#767676'}
            color2={'#767676'} 
            edit={false} 
        />
        <ReactStars
            count={1}
            vale={1}
            size={12}
            color1={'#767676'}
            color2={'#767676'} 
            edit={false} 
        />
        <ReactStars
            count={1}
            vale={1}
            size={12}
            color1={'#767676'}
            color2={'#767676'} 
            edit={false} 
        />
        <ReactStars
            count={1}
            vale={1}
            size={12}
            color1={'#767676'}
            color2={'#767676'} 
            edit={false} 
        />
        </div>
        <div id = "colRatingRows" className="oneColR">

            <div className="ratingRowName">5</div>
            <div className="ratingRowName">4</div>
            <div className="ratingRowName">3</div>
            <div className="ratingRowName">2</div>
            <div className="ratingRowName">1</div>

        </div>
        <div className="oneColR" id="graphBarsR">
            <ProgressBar  now={(props.tally[5]*100)/props.numRev}  />
            <br></br>
            <ProgressBar  now={(props.tally[4]*100)/props.numRev}  />
            <br></br>
            <ProgressBar  now={(props.tally[3]*100)/props.numRev}   />
            <br></br>
            <ProgressBar  now={(props.tally[2]*100)/props.numRev}  />
            <br></br>
            <ProgressBar  now={(props.tally[5]*100)/props.numRev}  />
        </div>
        <div id = "colRatingRows" className="oneColR">
            <div className="ratingRowName">{props.tally[5]}</div>
            <div className="ratingRowName">{props.tally[4]}</div>
            <div className="ratingRowName">{props.tally[3]}</div>
            <div className="ratingRowName">{props.tally[2]}</div>
            <div className="ratingRowName">{props.tally[1]}</div>
        </div>
        {/* <div id="circleRankDiv" className="oneColR"> */}
        <div className="oneColR">
        {/* break for between 2nd and 3rd element */}
        </div>
        <div className="oneColR">
        <CircularProgressbar value={55} text={`${55}%`} />
        </div>
        <div className="oneColR"> {/* break between colonm */} </div>
        <div className="oneColR">
        <CircularProgressbar value={55} text={`${55}%`} />
        </div>
        <div className="oneColR"> {/* break between colonm */} </div>
        <div className="oneColR">
        <CircularProgressbar value={55} text={`${55}%`} />
        </div>
        {/* </div> */}
    </div>
  );


  export default Rankings 

