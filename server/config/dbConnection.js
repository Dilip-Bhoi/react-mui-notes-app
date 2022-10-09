const mongoose = require('mongoose')

const { UNAME, PASSWORD, DBNAME } = process.env

const dbUrl = `mongodb+srv://${UNAME}:${encodeURIComponent(PASSWORD)}@cluster0.m78mzcu.mongodb.net/${DBNAME}?retryWrites=true&w=majority`

mongoose.connect(dbUrl).then(() => {
  console.log('DB connected successfully')
}).catch((err) => {
  console.log("DB connection error " + err)
})