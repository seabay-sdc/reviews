import React from 'react';
import './styling.css';


const Reviews = (props) => {
    return (
    <div key="ab" className="reviewContainer">
        {props.list.map(review => {
            return (
            <>
            <div key={"a" + review.id} className="user">
                <br></br>
                <font > by: </font>
                <a href="">{review.name}</a>
                <br></br>
                <font color="grey">{review.date} </font>
            </div>
            <div key={"b" + review.id} className="review">
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