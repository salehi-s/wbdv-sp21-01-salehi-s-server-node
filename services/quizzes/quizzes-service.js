const quizzes = require("./quizzes.json")
const quizzesModel = require("../../db/quizzes/quizzes-model")

const createQuiz = () => {

}

const findAllQuizzes = () => {
    // Previous Implementation
    // return quizzes

    return quizzesModel.find()
}

const findQuizById = (qid) => {
    // Previous Implementation
    // return quizzes.find((quiz) => {
    //     return (quiz._id === qid)
    // })

    return quizzesModel.findById(qid)
}

const updateQuiz = () => {

}

const deleteQuiz = () => {

}

module.exports = {
    createQuiz,
    findAllQuizzes,
    findQuizById,
    updateQuiz,
    deleteQuiz
}