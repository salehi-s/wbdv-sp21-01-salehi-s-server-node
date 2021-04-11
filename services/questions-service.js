const questions = require("./questions.json")

const findQuestionsForQuiz = (quizId) => {
    return questions.filter((question) => {
        return (question.quizId === quizId)
    })
}

module.exports = {
    findQuestionsForQuiz
}