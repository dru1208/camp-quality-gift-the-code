const express = require("express")
const cors = require("cors")
const app = express()
const bodyParser = require("body-parser")
require('dotenv').config();


// const sequelize = require("./src/models/index")


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

app.use(require('./src/routes/'))

const port = process.env.PORT || 3002


// sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log("Listening on port 3002, your server is up and running!")
  });
// })

