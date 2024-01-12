import React from "react";
import { SHowWorks } from "./how-it-works.styles";
import Steps from "./how-works-steps/how-works-steps";
import { Link } from "react-router-dom";

function HowItWorks() {
  return (
    <SHowWorks>
      <span className="how-it-works-title">How it works</span>
      <Steps type="light" />
      <Link to="/Subscribe">
        <button className="how-create-plan-button">Create your plan</button>
      </Link>
    </SHowWorks>
  );
}

export default HowItWorks;
