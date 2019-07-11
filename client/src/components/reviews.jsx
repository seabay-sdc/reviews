import React from 'react';
import './styling.css';


const Reviews = (props) => {
    return (
    <div className="reviewContainer">
        {props.list.map(review => {
            return (
            <>
            <div className="user">
                <br></br>
                <font > by: </font>
                <a href="">{review.name}</a>
                <br></br>
                <font color="grey">{review.date} </font>
            </div>
            <div className="review">
                <div className="title"> {review.title} </div>
                <div>{review.review} </div>
            </div>
            </>
            )
        })}
    </div>
    )
}


  export default Reviews 