const questionsService = require("../services/questions/questions-service")

module.exports = (app) => {

    const findAllQuestions = (req, res) => {
        const questions = questionsService.findAllQuestions()
        res.send(questions)
    }

    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params["quizId"]
        const questions = questionsService.findQuestionsForQuiz(quizId)
        res.send(questions)
    }

    app.get("/api/questions", findAllQuestions)

    app.get("/api/quizzes/:quizId/questions", findQuestionsForQuiz)

}