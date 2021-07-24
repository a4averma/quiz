import { createContext, useContext, useReducer } from "react";
import data from "../../utils/data";
import reducer from "./reducer";
import { CORRECT_ANSWER, NEXT_QUESTION, WRONG_ANSWER } from "./types";

const INITIAL_DATA = {
  questions: data,
  currentQuestion: 0,
  currentQuestionAnswer: "",
  answeredCorrectly: 0,
};

const QuestionContext = createContext(INITIAL_DATA);

function useProvideQuestion() {
  const [state, dispatch] = useReducer(reducer, INITIAL_DATA);
  const handleAnswer = (answer) => {
    if (state.currentQuestionAnswer.length) {
      return;
    }
    if (answer === state.questions[state.currentQuestion].correct_answer) {
      dispatch({
        type: CORRECT_ANSWER,
        payload: answer,
      });
    } else {
      dispatch({
        type: WRONG_ANSWER,
        payload: answer,
      });
    }
  };
  const handleNextQuestion = () => {
    dispatch({
      type: NEXT_QUESTION,
    });
  };
  return {
    questions: state.questions,
    currentQuestion: state.currentQuestion,
    answeredCorrectly: state.answeredCorrectly,
    currentQuestionAnswer: state.currentQuestionAnswer,
    handleAnswer,
    handleNextQuestion,
  };
}

export function QuestionProvider({ children }) {
  const question = useProvideQuestion();
  return (
    <QuestionContext.Provider value={question}>
      {children}
    </QuestionContext.Provider>
  );
}

export const useQuestions = () => {
  return useContext(QuestionContext);
};
