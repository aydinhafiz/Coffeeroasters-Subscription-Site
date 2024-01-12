import React from "react";
import { SCountryCenterInfo } from "./country-center-info.style";
import CenterInfoBox from "./center-info-box";

const centerCountryData = [
  {
    countryImg: "/assets/about/desktop/illustration-uk.svg",
    countryName: "United Kingdom",
    contactAdressStreet: "68 Asfordby Rd",
    contactAdressCity: "Alcaston",
    contactAdress3: "SY6 1YA",
    contactNumber: "+44 1241 918425",
  },
  {
    countryImg: "/assets/about/desktop/illustration-canada.svg",
    countryName: "Canada",
    contactAdressStreet: "1528  Eglinton Avenue",
    contactAdressCity: "Toronto",
    contactAdress3: "Ontario M4P 1A6",
    contactNumber: "+1 416 485 2997",
  },
  {
    countryImg: "/assets/about/desktop/illustration-australia.svg",
    countryName: "Australia",
    contactAdressStreet: "36 Swanston Street",
    contactAdressCity: "Kewell",
    contactAdress3: "Victoria",
    contactNumber: "+61 4 9928 3629",
  },
];

function CountryCenterInfo() {
  return (
    <SCountryCenterInfo>
      <div className="country-center-container">
        <h2 className="country-center-info-title">Our headquarters</h2>

        <div className="center-info-boxes">
          {centerCountryData.map(function (props) {
            return <CenterInfoBox key={props.countryName} {...props} />;
          })}
        </div>
      </div>
    </SCountryCenterInfo>
  );
}

export default CountryCenterInfo;
