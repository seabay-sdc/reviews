import React from 'react';
import './styling.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";


const Header = () => (
    <div>
        <h2 id="element1">Ratings and Reviews</h2>
        <Button id="element2" variant="contained" color="primary">
            Write a Review
        </Button>
        {/* <p className="paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolores. 
            Deserunt at dicta ratione itaque sit sed ea possimus ipsa maiores tenetur iure, 
            distinctio esse provident non praesentium hic expedita?
        </p> */}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <hr id="line"></hr>
    </div>
  );


  export default Header 