const mongoose = require('mongoose')
const connectionString = "mongodb+srv://root:root@reviews-y8owi.mongodb.net/test?retryWrites=true&w=majority"
const connector = mongoose.connect(connectionString, { useNewUrlParser: true })

const userSchema = new mongoose.Schema({
    id: Number,
    name: String,
    date: String,
    title: String,
    stars: Number,
    review: String
});


module.exports = userSchema



