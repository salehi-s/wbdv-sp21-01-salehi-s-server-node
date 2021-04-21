// Remote Implementation
const uri = process.env.MONGODB_URI

// Local Implementation
// const uri = "mongodb://localhost:27017/whiteboard"

const express = require("express")
const app = express()

// Import Mongoose NodeJS Library
const mongoose = require("mongoose")
mongoose.connect(uri,
                 {useNewUrlParser : true, useUnifiedTopology : true})

// Configure Body Parser
var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Configure CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With, Origin")
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS")
    next()
})

require("./controllers/quizzes-controller")(app)
require("./controllers/questions-controller")(app)
require('./controllers/quiz-attempts-controller')(app)

app.listen(3000)