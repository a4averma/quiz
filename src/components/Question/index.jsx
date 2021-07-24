import Answer from "./Answer";
import { useQuestions } from "../../context/Question/action";
import "./style.scss";

export default function Question() {
  const { questions, currentQuestion } = useQuestions();
  return (
    <section className="padding">
      <h6 className="question">{questions[currentQuestion].title}</h6>
      <div className="answers">
        {questions[currentQuestion].options.map((option, index) => (
          <Answer option={option} key={index} />
        ))}
      </div>
    </section>
  );
}
