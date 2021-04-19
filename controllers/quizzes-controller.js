const quizzesService = require("../services/quizzes/quizzes-service")

// Previous Implementation
{/*
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
*/}

module.exports = function(app) {

    app.get("/api/quizzes", (req, res) => {
        return quizzesService.findAllQuizzes()
            .then((allQuizzes) => res.json(allQuizzes))
    })

    app.get("/api/quizzes/:qzid", (req, res) => {
        return quizzesService.findQuizById(req.params["qzid"])
            .then((quiz) => res.json(quiz))
    })

}