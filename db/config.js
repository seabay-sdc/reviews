const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const db = mongoose.connection;

// db.collection("test").findOne({}, function(err, result) {
//   if (err) throw err;
//   console.log(result);
//   db.close();
// });





const getAll = (callback) => {
  db.collection("test").find({}).toArray((err, result) => {
    if (err) {
      callback(err)
    } else {
      callback(null, result)
    }
  })
}




// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   dbo.collection("customers").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });


module.exports = {
  getAll : getAll,
  // getOne : getOne
}


// { reviews: [
//     {id: 0,
//     name: "Mike",
//     date: "June 13, 2019",
//     title: "What a deal!!!!",
//     review: "I love'd it sooooooo much, I'd buy it again if it didn't make me so poor"
//     }

// db.test.insert({
// id: 1,
// name: "Jane",
// date: "June 01, 2019",
// title: "What a deal!!!!",
// review: "I love'd it sooooooo much, I'd buy it again if it didn't make me so poor"
// })

// db.test.insert({
//   id: 0,
//   name: "Mike",
//   date: "May 17, 2019",
//   title: "I Hate IT!",
//   review: "I've never bought such a shitty item, I will not be buying again"
//   })