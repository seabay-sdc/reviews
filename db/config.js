const mongoose = require('mongoose');
// const connectionString = {process.env.DB_URI}
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
    }
  })
}


module.exports = {
  getAll,
  addOne,
  addAlot,
  getById
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

// Note: To complete installation, ensure `eb` is in PATH. You can ensure this by executing:

// 1. Bash:

//    echo 'export PATH="/Users/mileszander/.ebcli-virtual-env/executables:$PATH"' >> ~/.bash_profile && source ~/.bash_profile

// 2. Zsh:

//    echo 'export PATH="/Users/mileszander/.ebcli-virtual-env/executables:$PATH"' >> ~/.zshenv && source ~/.zshenv