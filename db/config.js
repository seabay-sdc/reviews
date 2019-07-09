const mongoose = require('mongoose');
const connectionString = "mongodb+srv://root:root@reviews-y8owi.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(connectionString, { useNewUrlParser: true })


const db = mongoose.connection;


const getAll = (callback) => {
  db.collection("reviews").find({}).toArray((err, result) => {
    if (err) {
      callback(err)
    } else {
      callback(null, result)
    }
  })
}


const addOne = (review, callback) => {
  console.log(review)
  db.collection("reviews").insertOne(review, (err, result) => {
    if (err) {
      callback(err)
    } else {
      callback(null, true)
    }
  })
}


module.exports = {
  getAll : getAll,
  addOne : addOne
}


// {
// id: 1,
// name: "Jane",
// date: "June 01, 2019",
// title: "What a deal!!!!",
// review: "I love'd it sooooooo much, I'd buy it again if it didn't make me so poor"
// })

//  {
//   id: 0,
//   name: "Mike",
//   date: "May 17, 2019",
//   title: "I Hate IT!",
//   review: "I've never bought such a shitty item, I will not be buying again"
//   })