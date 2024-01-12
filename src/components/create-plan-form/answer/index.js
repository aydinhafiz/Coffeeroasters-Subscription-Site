import React from "react";
import SAnswer from "./answer.styles";

function Answer({ answer, questionId, chooseAnswer }) {
  return (
    <SAnswer
      $clicked={answer.clicked}
      key={answer.id}
      onClick={() => chooseAnswer(questionId, answer.id)}
    >
      <h3 className="answer-title">{answer.title}</h3>
      <p className="answer-description">{answer.description}</p>
    </SAnswer>
  );
}

export default Answer;
