const quizzesModel = require('./quizzes-model')

const findAllQuizzes = () => {
    return quizzesModel.find()
}

const findQuizById = (quizId) => {
    return quizzesModel.findById(quizId)
}

module.exports = {
    findAllQuizzes,
    findQuizById
}