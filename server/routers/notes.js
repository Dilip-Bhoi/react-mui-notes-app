const mongoose = require('mongoose')
const express = require('express');
const router = express.Router();

const NotesModel = require('../models/notes')

router.get('/notes', async (req, res) => {
  try {
    const data = await NotesModel.find();
    if (data.length) {
      res.status(200).send(data);
    } else {
      res.status(200).send({ Error: 'No data found' })
    }
  } catch (error) {
    res.status(500).send({ Error: 'Something wrong! 2' + error })
  }
})

router.post('/notes', async (req, res) => {
  try {
    const { title, details, category } = req.body;
    const data = await NotesModel.insertMany([{ title, details, category }]);
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(400).send({ Error: 'Something went wrong' })
    }
  } catch (error) {
    res.status(500).send({ Error: 'Something wrong! ' + error })
  }
})

router.delete('/notes/:id', async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Id ", id)
    const data = await NotesModel.deleteOne({ _id: new mongoose.Types.ObjectId(id) });
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(400).send({ Error: 'Something went wrong' })
    }
  } catch (error) {
    res.status(500).send({ Error: 'Something wrong! ' + error })
  }
})

module.exports = router