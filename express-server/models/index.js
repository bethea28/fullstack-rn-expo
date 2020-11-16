const mongoose = require('mongoose')

// let Schema = mongoose.Schema;

const PersonSchema = new mongoose.Schema({
  // name: { type: String, required: true },
  username: String,
  //   age: Number,
  //   favoriteFoods: [String]
})

const ExcerciseSchema = new mongoose.Schema({
  // userid: mongoose.ObjectId,
  description: String,
  duration: String,
  date: Date,
})

module.exports = { ExcerciseSchema, PersonSchema }
// module.exports = mongoose.model("Person", PersonSchema);
