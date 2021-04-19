const questionsModel = require('./questions-model')
const quizzesModel = require('../quizzes/quizzes-model')

const findAllQuestions = () => {
    return questionsModel.find()
}

const findQuestionById = (qid) => {
    return questionsModel.findById(qid)
}

const findQuestionsForQuiz = (qzid) => {
    return quizzesModel.findById(qzid)
        .populate("questions")
        .then((quiz) => quiz.questions)
}

module.exports = {
    findAllQuestions,
    findQuestionById,
    findQuestionsForQuiz
}