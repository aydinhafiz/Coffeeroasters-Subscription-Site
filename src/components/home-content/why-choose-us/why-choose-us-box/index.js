import React from "react";
import { SWhyChooseBox } from "./style";

function WhyChooseUsBox({ chooseUsImg, chooseUsTitle, chooseUsDescription }) {
  return (
    <SWhyChooseBox>
      <img src={chooseUsImg} alt="" className="choose-box-img" />
      <div className="choose-box-text">
        <h3 className="choose-box-title">{chooseUsTitle}</h3>
        <p className="choose-box-description">{chooseUsDescription}</p>
      </div>
    </SWhyChooseBox>
  );
}

export default WhyChooseUsBox;
