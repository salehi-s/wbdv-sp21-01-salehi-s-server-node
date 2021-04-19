const questions = require("./questions.json")
const questionsModel = require("../../db/questions/questions-model")
const questionsDao = require("../../db/questions/questions-dao")

const createQuestion = () => {

}

const createQuestionForQuiz = () => {

}

const findAllQuestions = () => {
    // Previous Implementation
    // return questions

    // Non-DAO Implementation
    // return questionsModel.find()

    return questionsDao.findAllQuestions()
}

const findQuestionsForQuiz = (quizId) => {
    // Previous Implementation
    // return questions.filter((question) => {
    //     return (question.quizId === quizId)
    // })

    // Non-DAO Implementation
    // return questionsModel.find({quizId: quizId})

    return questionsDao.findQuestionsForQuiz(quizId)
}

const findQuestionById = (questionId) => {
    // Previous Implementation
    // return questions.find((question) => {
    //     return (question._id === questionId)
    // })

    // Non-DAO Implementation
    // return questionsModel.findById(questionId)

    return questionsDao.findQuestionById(questionId)
}

const updateQuestion = () => {

}

const deleteQuestion = () => {

}

module.exports = {
    createQuestion,
    createQuestionForQuiz,
    findAllQuestions,
    findQuestionsForQuiz,
    findQuestionById,
    updateQuestion,
    deleteQuestion
}