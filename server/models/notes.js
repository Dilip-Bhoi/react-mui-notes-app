const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NotesModel = new Schema({
  title: {
    type: String
  },
  details: {
    type: String
  },
  category: {
    type: String
  }
})

module.exports = mongoose.model('notes', NotesModel);