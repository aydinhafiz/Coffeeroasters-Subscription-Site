import React, { useState } from "react";
import SDecisionPanel from "./decision-panel.styles";
import Question from "../question";
import OrderSummary from "../order-summary";

function DecisionPanel({ questionsData, toggleQuestionAcc, chooseAnswer }) {
  return (
    <SDecisionPanel>
      <div className="questions">
        {questionsData.map(function (question, index) {
          return (
            <Question
              key={question.title}
              toggleQuestionAcc={toggleQuestionAcc}
              question={question}
              index={index}
              chooseAnswer={chooseAnswer}
            />
          );
        })}
      </div>
      <OrderSummary createPlanState={questionsData} />
    </SDecisionPanel>
  );
}

export default DecisionPanel;
