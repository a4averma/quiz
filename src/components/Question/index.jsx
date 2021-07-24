import Answer from "./Answer";
import { useQuestions } from "../../context/Question/action";
import "./style.scss";
import { useLayoutEffect } from "react";

export default function Question() {
  const { questions, currentQuestion } = useQuestions();
  useLayoutEffect(() => {
    document.getElementById("question").classList.remove("fade");
    setTimeout(() => {
      document.getElementById("question").classList.add("fade");
    }, 200);
  }, [currentQuestion]);
  return (
    <section className="padding opacity" id="question">
      <h6 className="question">{questions[currentQuestion].title}</h6>
      <div className="answers">
        {questions[currentQuestion].options.map((option, index) => (
          <Answer option={option} key={index} />
        ))}
      </div>
    </section>
  );
}
