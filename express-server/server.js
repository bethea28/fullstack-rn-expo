const express = require('express')
const artistRoutes = require('./routes/notes')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// Loads env variables
require('dotenv').config()

// Initalizes express server
const app = express()
//mongo setup
mongoose.connect(process.env.mongo_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
const db = mongoose.connection
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('connected to database'))
// specifies what port to run the server on
const PORT = process.env.PORT || 3001

// Adds json parsing middleware to incoming requests
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

// makes the app aware of routes in another folder
app.use('/', artistRoutes)

// console.log that your server is up and running
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
