import { useQuestions } from "../../context/Question/action";
import "./styles.scss";

export default function Feedback() {
  const {
    questions,
    currentQuestion,
    currentQuestionAnswer,
    handleNextQuestion,
  } = useQuestions();

  return currentQuestionAnswer.length ? (
    <section className="wrapper padding">
      <div className="feedback">
        {currentQuestionAnswer === questions[currentQuestion].correct_answer
          ? "Correct!"
          : "Sorry!"}
      </div>
      {questions.length === currentQuestion + 1 ? (
        ""
      ) : (
        <div className="action cursor-pointer" onClick={handleNextQuestion}>
          Next Question
        </div>
      )}
    </section>
  ) : (
    ""
  );
}
