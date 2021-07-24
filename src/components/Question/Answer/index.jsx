import { useQuestions } from "../../../context/Question/action";
import "./styles.scss";

export default function Answer({ option }) {
  const { handleAnswer, currentQuestionAnswer, currentQuestion, questions } =
    useQuestions();
  const calculateBackground = (option) => {
    if (currentQuestionAnswer) {
      if (option === questions[currentQuestion].correct_answer) {
        return "yellow";
      } else if (
        option === currentQuestionAnswer &&
        currentQuestionAnswer !== questions[currentQuestion].correct_answer
      ) {
        return "black";
      } else {
        return "grey";
      }
    }
    return "white";
  };
  return (
    <section
      onClick={() => handleAnswer(option)}
      className="answer-box cursor-pointer padding"
      style={{
        backgroundColor: calculateBackground(option),
      }}
    >
      {option}
    </section>
  );
}
