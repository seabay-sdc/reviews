import React from 'react';
import './styling.css';


const Reviews = (props) => {
    return (
    <div key="ab" className="reviewContainerR">
        {props.list.map(review => {
            return (
            <>
            <div key={"a" + review.id} className="userR">
                <br></br>
                <font > by: </font>
                <a href="" className="linksR">{review.name}</a>
                <br></br>
                <font color="grey">{review.date} </font>
            </div>
            <div key={"b" + review.id} className="reviewR">
                <div className="titleR"> {review.title} </div>
                <div>{review.review} </div>
            </div>
            </>
            )
        })}
    </div>
    )
}


  export default Reviews 