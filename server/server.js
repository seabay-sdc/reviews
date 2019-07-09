// dotenv must be required as early as possible for env vars to propogate
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3004;
const bodyParser = require("body-parser");
const path = require('path');
const db = require("../db/config.js")


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('client/dist'));



app.get('/test', function (req, res) {
  db.getAll((err, result) => {
    if (err) {
      res.send(`couldn't get`)
      console.log(`we didn't get it`)
    } else {
      res.send(result)
      console.log('we got it')
    }
  })
})

app.post('/test', function (req, res) {
  const review = req.body
  db.addOne(review, (err, result) => {
    if (err) {
      res.send(`couldn't get`)
      console.log(`we didn't get it`)
    } else {
      res.send(result)
      console.log('we got it')
    }
  })
})





app.listen(port, () => console.log(`Server is running on ${port}`));


