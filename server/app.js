// dotenv must be required as early as possible for env vars to propogate
require('dotenv').config();
const faker = require('faker');
const express = require('express');
const cors = require('cors');
let app = express();
const bodyParser = require("body-parser");
const path = require('path');
let db = require("../db/config.js")
const data = require("./makeReviews.js")
const compression = require('compression')


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression())

app.use(express.static('client/dist'));

//data.makeData2()

app.get('/makedata', function (req, res) {
  let allReviews
  data.makeData((err, result) => {
    allReviews = result
  })
    db.addAlot(allReviews, (err, result) => {
      if (err) {
        res.send(`couldn't get`)
        console.log(`we didn't get it`)
      } else {
        res.send(result)
        console.log('we got it')
      }
    })
})

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

app.get('/id/:id', function (req, res) {
  console.log('hi')
  let idNum = parseInt(req.params.id)
  db.getById(idNum, (err, result) => {
    if (err) {
      res.send(`couldn't get`)
      console.log(`we didn't get it`)
    } else {
      // console.log(req)
      console.log('we got it')
      res.send(result)
    }
  })
})



app.post('/newReview', function (req, res) {
  const review = req.body.newRev
  // console.log(review)
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

module.exports = app