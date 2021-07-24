import { useQuestions } from "../../context/Question/action";
import "./styles.scss";
import { FaCrosshairs } from "react-icons/all";
import { useEffect } from "react";

export default function Stats() {
  const {
    questions,
    currentQuestion,
    answeredCorrectly,
    currentQuestionAnswer,
  } = useQuestions();
  useEffect(() => {
    if (answeredCorrectly > 0) {
      document.getElementById("spin").classList.remove("spin");
      setTimeout(() => {
        document.getElementById("spin").classList.add("spin");
      }, 200);
    }
  }, [answeredCorrectly]);
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
        <FaCrosshairs />{" "}
        <span className="spin" id="spin">
          {(answeredCorrectly / questions.length) * 100}
        </span>
        %
      </p>
    </header>
  );
}
