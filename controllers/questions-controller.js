const questionsService = require("../services/questions/questions-service")

module.exports = (app) => {

    const findAllQuestions = (req, res) => {
        // Previous Implementation
        // const questions = questionsService.findAllQuestions()
        // res.send(questions)

        questionsService.findAllQuestions()
            .then((questions) => {
                res.send(questions)
            })
    }

    const findQuestionsForQuiz = (req, res) => {
        // Previous Implementation
        // const quizId = req.params["quizId"]
        // const questions = questionsService.findQuestionsForQuiz(quizId)
        // res.send(questions)

        const quizId = req.params["quizId"]
        questionsService.findQuestionsForQuiz(quizId)
            .then((questions) => {
                res.send(questions)
            })
    }

    app.get("/api/questions", findAllQuestions)

    app.get("/api/quizzes/:quizId/questions", findQuestionsForQuiz)

}