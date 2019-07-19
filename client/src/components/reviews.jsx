import React from 'react';
import './styling.css';
import ReactStars from 'react-stars'




const Reviews = (props) => {
    return (
    <div key="ab" className="reviewContainerR">
        {props.list.map((review,i) => {
            const score = review.score
            return (
            <>
            <div className="userR">
            <ReactStars
                count={5}
                value={score}
                size={20}
                color1={'#ECEBEB'}
                color2={'#E8952A'} 
                edit={false}
            />
            <font > by: </font>
                <a href="" className="linksR">{review.name}</a>
                <br></br>
            <font color="B6B0B0">{review.date} </font>
            </div>
            <div className="reviewR">
                <div className="titleR"> {review.title} </div>
                <p className="reviewPara">{review.review} </p>
            </div>
            </>
            )
        })}
    </div>
    )
}

function makeScore (item) {
    for (let i = 1; i < 5; i++) {
        if (item === i) {
            return i + 0
        }
    }
}


  export default Reviews 