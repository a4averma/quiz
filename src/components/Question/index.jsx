import Answer from "./Answer";
import { useQuestions } from "../../context/Question/action";

export default function Question() {
  const { questions, currentQuestion } = useQuestions();
  return (
    <section>
      <h1>{questions[currentQuestion].title}</h1>
      <div
        style={{
          display: "flex",
        }}
      >
        {questions[currentQuestion].options.map((option, index) => (
          <Answer option={option} key={index} />
        ))}
      </div>
    </section>
  );
}
