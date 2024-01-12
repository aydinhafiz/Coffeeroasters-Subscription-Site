import React from "react";
import { SWhyChooseUs } from "./why-choose-us.styles";
import WhyChooseUsBox from "./why-choose-us-box";

const whyChooseUsAspectsData = [
  {
    chooseUsImg: "/assets/home/desktop/icon-coffee-bean.svg",
    chooseUsTitle: "Best Quality",
    chooseUsDescription:
      "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
  },
  {
    chooseUsImg: "/assets/home/desktop/icon-gift.svg",
    chooseUsTitle: "Exclusive benefits",
    chooseUsDescription:
      "Special offers and swag when you subscribe, including 30% off your first shipment.",
  },
  {
    chooseUsImg: "/assets/home/desktop/icon-truck.svg",
    chooseUsTitle: "Free Shipping",
    chooseUsDescription:
      "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
  },
];

function WhyChooseUs(props) {
  return (
    <SWhyChooseUs>
      <div className="why-choose-us-intro">
        <h2 className="why-choose-us-title">Why choose us?</h2>
        <p className="why-choose-us-description">
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </div>
      <div className="why-choose-us-boxes">
        {whyChooseUsAspectsData.map(function (props) {
          return <WhyChooseUsBox {...props} key={props.chooseUsTitle} />;
        })}
      </div>
    </SWhyChooseUs>
  );
}

export default WhyChooseUs;
