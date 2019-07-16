// dotenv must be required as early as possible for env vars to propogate
require('dotenv').config();
const faker = require('faker');

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.SERVER_PORT
const HOST = process.env.SERVER_HOST
const bodyParser = require("body-parser");
const path = require('path');
const db = require("../db/config.js")
const data = require("./makeReviews.js")


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('client/dist'));



// app.get('/makedata', function (req, res) {
//   let allReviews
//   data.makeData((err, result) => {
//     allReviews = result
//   })
//     db.addAlot(allReviews, (err, result) => {
//       if (err) {
//         res.send(`couldn't get`)
//         console.log(`we didn't get it`)
//       } else {
//         res.send(result)
//         console.log('we got it')
//       }
//     })
// })

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





app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);


