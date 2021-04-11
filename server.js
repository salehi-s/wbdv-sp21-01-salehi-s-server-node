const express = require("express")
const app = express()

const quizzesController = require("./controllers/quizzes-controller")
quizzesController(app)

const questionsController = require("./controllers/questions-controller")
questionsController(app)

app.listen(3000)