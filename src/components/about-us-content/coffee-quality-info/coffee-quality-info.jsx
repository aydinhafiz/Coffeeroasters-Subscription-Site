import React from "react";
import { SCoffeeQualityInfo } from "./coffee-quality-info.style";

function CoffeeQualityInfo() {
  return (
    <SCoffeeQualityInfo>
      <div className="coffee-quality-container">
        <div className="coffee-quality-text">
          <h2 className="coffee-quality-title">Uncompromising quality</h2>
          <p className="coffee-quality-description">
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>
        <div className="quality-img"></div>
      </div>
    </SCoffeeQualityInfo>
  );
}

export default CoffeeQualityInfo;
