import { useQuestions } from "../../context/Question/action";
import "./styles.scss";
import { FaCrosshairs } from "react-icons/all";

export default function Stats() {
  const {
    questions,
    currentQuestion,
    answeredCorrectly,
    currentQuestionAnswer,
  } = useQuestions();
  return (
    <header className="stats">
      {questions.length === currentQuestion + 1 && currentQuestionAnswer ? (
        <h1>Game Over!</h1>
      ) : (
        <h1>
          Question {currentQuestion + 1} of {questions.length}
        </h1>
      )}

      <p className="percent">
        <FaCrosshairs /> {(answeredCorrectly / questions.length) * 100}%
      </p>
    </header>
  );
}
