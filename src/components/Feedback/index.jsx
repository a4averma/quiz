import { useQuestions } from "../../context/Question/action";

export default function Feedback() {
  const {
    questions,
    currentQuestion,
    currentQuestionAnswer,
    handleNextQuestion,
  } = useQuestions();

  return currentQuestionAnswer.length ? (
    <section>
      <p>
        {currentQuestionAnswer === questions[currentQuestion].correct_answer
          ? "Correct!"
          : "Sorry!"}
      </p>
      {questions.length === currentQuestion + 1 ? (
        ""
      ) : (
        <div onClick={handleNextQuestion}>Next Question</div>
      )}
    </section>
  ) : (
    ""
  );
}
