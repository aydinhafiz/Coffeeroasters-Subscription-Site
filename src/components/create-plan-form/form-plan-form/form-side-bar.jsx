import React from "react";
import SFormSideBar from "./form-side-bar.styles";

function FormSideBar({ sectionNames, createPlanState }) {
  return (
    <SFormSideBar>
      <div className="side-bar-step">
        {sectionNames.map(function (section, i) {
          const num = i + 1;
          const anyClicked = createPlanState[i].options.some((o) => o.clicked);
          return (
            <div
              className={"side-bar-steps" + (anyClicked ? "-active" : "")}
              key={section}
            >
              <span className="steps-num">0{num}</span>
              <h3 className="steps-title">{section}</h3>
            </div>
          );
        })}
      </div>
    </SFormSideBar>
  );
}

export default FormSideBar;
