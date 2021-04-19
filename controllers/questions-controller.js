const questionsService = require("../services/questions/questions-service")

// Previous Implementation
{/*
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
*/}

module.exports = function(app) {

    app.get("/api/quizzes/:quizId/questions", (req, res) => {
        return questionsService.findQuestionsForQuiz(req.params["quizId"])
            .then((questions) => res.json(questions))
    })

    app.get("/api/questions", (req, res) => {
        return questionsService.findAllQuestions()
            .then((allQuestions) => res.json(allQuestions))
    })

    app.get("/api/questions/:qid", (req, res) => {
        return questionsService.findQuestionById(req.params["qid"])
            .then((question) => res.json(question))
    })

}