import { useQuestions } from "../../../context/Question/action";
import "./styles.scss";

export default function Answer({ option }) {
  const { handleAnswer, currentQuestionAnswer, currentQuestion, questions } =
    useQuestions();
  const calculateBackground = (option) => {
    if (currentQuestionAnswer) {
      if (option === questions[currentQuestion].correct_answer) {
        return "correct-answer";
      } else if (
        option === currentQuestionAnswer &&
        currentQuestionAnswer !== questions[currentQuestion].correct_answer
      ) {
        return "wrong-answer";
      } else {
        return "other-answer";
      }
    }
    return "no-answer";
  };
  return (
    <section
      onClick={() => handleAnswer(option)}
      className={`answer-box cursor-pointer padding ${calculateBackground(
        option
      )}`}
    >
      {option}
    </section>
  );
}
