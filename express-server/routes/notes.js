var express = require('express')
var app = express()
var artistRoutes = express.Router()
var Schemas = require('../models')
const axios = require('axios')
const mongoose = require('mongoose')

let Person = mongoose.model('Person', Schemas.PersonSchema)
let Exercise = mongoose.model('Excercise', Schemas.ExcerciseSchema)

const getArtist = async (req, res) => {
  const final = await Person.find()

  console.log('final')
  res.send(final)
}

const postArtist = async (req, res) => {
  const newPerson = new Person({
    username: req.body.username,
  })
  console.log('save')
  // res.send('post done')
  const finalPerson = await newPerson.save()
  res.status(201).json(finalPerson)
}

artistRoutes.route('/get').get(getArtist)
artistRoutes.route('/post').post(postArtist)

module.exports = artistRoutes
