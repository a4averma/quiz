import { CORRECT_ANSWER, NEXT_QUESTION, WRONG_ANSWER } from "./types";

const reducer = (state, action) => {
  switch (action.type) {
    case CORRECT_ANSWER:
      return {
        ...state,
        answeredCorrectly: state.answeredCorrectly + 1,
        currentQuestionAnswer: action.payload,
      };
    case WRONG_ANSWER:
      return {
        ...state,
        currentQuestionAnswer: action.payload,
      };
    case NEXT_QUESTION:
      return {
        ...state,
        currentQuestionAnswer: "",
        currentQuestion: state.currentQuestion + 1,
      };
    default:
      return state;
  }
};

export default reducer;
