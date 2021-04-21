const quizzes = require("./quizzes.json")
const quizzesModel = require("../../models/quizzes/quizzes-model")
const quizzesDao = require("../../daos/quizzes-dao")

const createQuiz = () => {

}

const findAllQuizzes = () => {
    // Previous Implementation
    // return quizzes

    // Non-DAO Implementation
    // return quizzesModel.find()

    return quizzesDao.findAllQuizzes()
}

const findQuizById = (qid) => {
    // Previous Implementation
    // return quizzes.find((quiz) => {
    //     return (quiz._id === qid)
    // })

    // Non-DAO Implementation
    // return quizzesModel.findById(qid)
    //     .populate("questions")
    //     .exec()

    return quizzesDao.findQuizById(qid)
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