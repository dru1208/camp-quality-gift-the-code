const express = require("express")
const cors = require("cors")
const app = express()
const bodyParser = require("body-parser")


const models = require("./src/models/index")


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

const port = process.env.PORT || 3002

const router = express.Router()

router.get("/", (req, res) => {
  res.json({ message: "welcome to the api yo"})
})

app.use("/api", router)

models.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log("Listening on port 3002, your server is up and running!")
  });
})

