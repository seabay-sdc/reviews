require('dotenv').config();
const faker = require('faker');
const express = require('express');

const data = []
const makeData = (callback) => {
  for (let i=0; i < 100; i++) {
    let hold = {}
    hold["id"] = i
    hold["name"] = faker.name.findName();
    hold["date"] = dateMaker()
    hold["title"] = faker.company.catchPhrase()
    hold["score"] = randomNum()
    hold["review"] = faker.company.catchPhraseAdjective() + " " + faker.company.catchPhraseNoun() + " " +
    faker.company.bs() + " " + faker.company.bsAdjective()
    data.push(hold)
  }
  callback(null, data)
}

function dateMaker () {
  let date = faker.date.past()
  date = JSON.stringify(date)
  date = date.slice(1,11)
  const arr = date.split('-')
  return arr[1]+"/"+arr[2]+"/"+arr[0]
}

function randomNum () {
  const num = Math.round(Math.random()*5)
  if (num !==0 ) {
    return num
  } else {
    return 1;
  }
}

module.exports = {
    makeData
}
