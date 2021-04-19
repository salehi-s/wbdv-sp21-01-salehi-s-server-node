const questions = require("./questions.json")
const questionsModel = require("../../db/questions/questions-model")

const createQuestion = () => {

}

const createQuestionForQuiz = () => {

}

const findAllQuestions = () => {
    // Previous Implementation
    // return questions

    return questionsModel.find()
}

const findQuestionsForQuiz = (quizId) => {
    // Previous Implementation
    // return questions.filter((question) => {
    //     return (question.quizId === quizId)
    // })

    return questionsModel.find({quizId: quizId})
}

const findQuestionById = (questionId) => {
    // Previous Implementation
    // return questions.find((question) => {
    //     return (question._id === questionId)
    // })

    return questionsModel.findById(questionId)
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