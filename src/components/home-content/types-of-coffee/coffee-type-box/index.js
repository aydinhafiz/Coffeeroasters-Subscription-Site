import React from "react";
import { STypeOfCoffeeBox } from "./styles";

function CoffeeTypeBox({
  coffeeType,
  coffeImg,
  coffeeDescription,
  // handleCoffeeClick,
  // clickedCoffees,
}) {
  return (
    <STypeOfCoffeeBox key={coffeeType}>
      <img src={coffeImg} alt="" className="coffe-type__img" />

      <div className="type-coffe-box-text">
        <h3
          className="coffee-type__title"
          // onClick={() => handleCoffeeClick(coffeeType)}
        >
          {coffeeType}
        </h3>
        <p className="coffee-type__description">{coffeeDescription}</p>
      </div>
    </STypeOfCoffeeBox>
  );
}

export default CoffeeTypeBox;
