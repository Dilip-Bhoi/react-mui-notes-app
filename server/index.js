const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const notesRoute = require('./routers/notes')

require('dotenv').config()
console.log("i am here", process.env)
const { PORT } = process.env

const app = express()
app.use(cors())
app.use(bodyParser.json())

const path = require('path')

require('./config/dbConnection')
app.use(express.static(path.join(__dirname, '../client/build')))

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, '../client/public', 'index.html'));
// });
app.use('/', notesRoute);

app.listen(PORT, (err) => {
  if (err) {
    console.log(`Therer is some error`)
  }
  console.log(`Listening to port ${PORT}`)
})