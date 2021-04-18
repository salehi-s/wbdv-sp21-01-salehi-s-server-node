const quizzesService = require("../services/quizzes/quizzes-service")

module.exports = (app) => {

    const findAllQuizzes = (req, res) => {
        // Previous Implementation
        // const quizzes = quizzesService.findAllQuizzes()
        // res.send(quizzes)

        quizzesService.findAllQuizzes()
            .then((quizzes) => {
                res.send(quizzes)
            })
    }

    const findQuizById = (req, res) => {
        // Previous Implementation
        // const quizId = req.params["qid"]
        // const quiz = quizzesService.findQuizById(quizId)
        // res.send(quiz)

        const quizId = req.params["qid"]
        quizzesService.findQuizById(quizId)
            .then((quiz) => {
                res.send(quiz)
            })
    }

    app.get("/api/quizzes", findAllQuizzes)

    app.get("/api/quizzes/:qid", findQuizById)

}