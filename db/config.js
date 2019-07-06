const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('we are connected')
});

// Use 

// { reviews: [
    {id: 0,
    name: "Mike",
    date: "June 13, 2019",
    title: "What a deal!!!!",
    review: "I love'd it sooooooo much, I'd buy it again if it didn't make me so poor"
    }

test.insert({
id: 0,
name: "Mike",
date: "June 13, 2019",
title: "What a deal!!!!",
})