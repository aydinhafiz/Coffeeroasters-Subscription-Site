import React from "react";
import { SAboutUsContent } from "./about-us-content.styles";
import OurWordPart from "./our-word-part/our-word-part";
import CoffeeQualityInfo from "./coffee-quality-info/coffee-quality-info";
import CountryCenterInfo from "./country-center-info/country-center-info";

function AboutUsContent() {
  return (
    <SAboutUsContent>
      <OurWordPart />
      <CoffeeQualityInfo />
      <CountryCenterInfo />
    </SAboutUsContent>
  );
}

export default AboutUsContent;
