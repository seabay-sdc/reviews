const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true })


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

const getById = (idNum,callback) => {
  db.collection("reviews").find({id:idNum}).toArray((err, result) => {
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

const addAlot = (review, callback) => {
  console.log(review)
  db.collection("reviews").insertMany(review, (err, result) => {
    if (err) {
      callback(err)
    } else {
      callback(null, true)
      db.close()
    }
  })
}

// db.collection("reviews").deleteMany()

module.exports = {
  getAll,
  addOne,
  addAlot,
  getById
}


