require('dotenv').config();
const faker = require('faker');
const express = require('express');

const data = []
const makeData = (callback) => {
  for (let i=0; i < 100; i++) {
    let hold = {}
    hold["id"] = i
    hold["name"] = faker.name.findName();
    let date = faker.date.past()
    date = JSON.stringify(date)
    hold["date"] = date.slice(1,11)
    hold["title"] = faker.company.catchPhrase()
    hold["review"] = faker.company.catchPhraseNoun() + faker.company.catchPhraseAdjective() +
    faker.company.bs() + faker.company.bsAdjective()
    data.push(hold)
  }
  callback(null, data)
}

module.exports = {
    makeData
}
