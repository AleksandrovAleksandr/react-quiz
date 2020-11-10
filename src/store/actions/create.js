import Axios from 'axios'
import {CREATE_QUIZ_QUESTION, RESET_QUIZ_CREATION} from './actionTypes'

export function createQuizQuestion(item) {
  return {
    type: CREATE_QUIZ_QUESTION,
  }
}

export function resetQuizCreation() {
  return {
    type: RESET_QUIZ_CREATION,
  }
}

export function finishCreateQuiz() {
  return async (dispatch, getState) => {
    await Axios.post('quizes.json', getState().create.quiz)
    dispatch(resetQuizCreation())
  }
}
