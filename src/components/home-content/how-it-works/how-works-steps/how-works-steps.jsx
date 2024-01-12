import React from "react";
import { SSteps } from "./how-works-steps.style";
import HowWorkStep from "./how-work-step";

function Steps({ type }) {
  const steps = [
    {
      title: "Pick your coffee",
      description:
        "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
    },
    {
      title: "Choose the frequency",
      description:
        "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
    },
    {
      title: "Receive and enjoy!",
      description:
        "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
    },
  ];
  return (
    <SSteps type={type}>
      {steps.map(function (step, i) {
        return <HowWorkStep type={type} key={i} {...{ ...step, num: i + 1 }} />;
      })}
    </SSteps>
  );
}

export default Steps; 
