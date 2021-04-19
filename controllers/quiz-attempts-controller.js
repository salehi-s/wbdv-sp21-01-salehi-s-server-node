const quizAttemptsDao = require("../db/quiz-attempts/quiz-attempts-dao")

module.exports = (app) => {

    app.post("/api/quizzes/:qid/attempts", (req, res) => {
        return quizAttemptsDao.createAttempt(req.params.qid, req.body)
            .then((attempt) => res.send(attempt))
    })

    app.get("/api/quizzes/:qid/attempts", (req, res) => {
        return quizAttemptsDao.findAttemptsForQuiz(req.params.qid)
            .then((attempts) => res.send(attempts))
    })

}