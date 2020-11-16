var express = require('express')
var app = express()
var artistRoutes = express.Router()
var Schemas = require('../models')
const axios = require('axios')
const mongoose = require('mongoose')

// let FinalPerson = Person.model('Person', Person.PersonSchema)

let Person = mongoose.model('Person', Schemas.PersonSchema)
let Exercise = mongoose.model('Excercise', Schemas.ExcerciseSchema)
// console.log("FinalPerson", Exercise);
// var Artist = require('../models/artist-model')
// module.exports = mongoose.model("Person", PersonSchema);

// MyModel.find({ name: 'john', age: { $gte: 18 }});

const getAllExercises = async (req, res) => {
  const final = await Person.find()

  console.log('final')
  res.send(final)
  // res.send(final)
  // res.send("GET bryan");
}

const createArtist = async (req, res) => {
  const newPerson = new Person({
    username: req.body.username,
  })
  console.log('save')
  // res.send('post done')
  const finalPerson = await newPerson.save()
  res.status(201).json(finalPerson)
}

// const createExercise = async (req, res) => {
//   let newExercise = new Exercise({
//     // userid: req.body.userid,
//     description: req.body.description,
//     duration: req.body.duration,
//     date: new Date(),
//   })

//   const finalExercise = await newExercise.save()
//   res.status(201).json(finalExercise)
// }
artistRoutes.route('/get').get(getAllExercises)
artistRoutes.route('/post').post(createArtist)
// artistRoutes.route('/api/exercise/new-user').post(createArtist)
// artistRoutes.route('/api/exercise/add').post(createExercise)

module.exports = artistRoutes
