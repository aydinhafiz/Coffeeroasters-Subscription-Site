import React from "react";
import { SCenterInfoBox } from "./style";

function CenterInfoBox({
  countryImg,
  countryName,
  contactAdressStreet,
  contactAdressCity,  
  contactAdress3,
  contactNumber,
}) {
  return (
    <SCenterInfoBox key={countryName}>
      <img src={countryImg} alt="" className="country-center-info-box-img" />
      <h2 className="country-center-info-box-title">{countryName}</h2>
      <div className="country-center-info-box-description">
        <span className="center-adress-description">{contactAdressStreet}</span>
        <span className="center-adress-description">{contactAdressCity}</span>
        <span className="center-adress-description">{contactAdress3}</span>
        <span className="center-adress-description">{contactNumber}</span>
      </div>
    </SCenterInfoBox>
  );
}

export default CenterInfoBox;
