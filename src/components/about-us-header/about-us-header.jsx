import React from "react";
import { SAboutHeader } from "./about-us-header-style";

function AboutUsHeader() {
  return (
    <SAboutHeader>
      <div className="about-us-info-text">
        <h2 className="about-us-header-title">About Us</h2>
        <p className="about-us-header-description">
          Coffeeroasters began its journey of exotic discovery in 1999,
          highlighting stories of coffee from around the world. We have since
          been dedicated to bring the perfect cup - from bean to brew - in every
          shipment.
        </p>
      </div>
    </SAboutHeader>
  );
}

export default AboutUsHeader;     
