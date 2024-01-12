import React from "react";
import { SHomeHeader } from "./header.styles";
import { Link } from "react-router-dom";

function Header() {
  return (
    <SHomeHeader>
      <div className="create-plan-info__description">
        <h2 className="create-plan-info-description__title">
          Great coffee made simple.
        </h2>
        <p className="create-plan-info-descriptiono__paragraph">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <Link to="/Subscribe">
          <button className="create-plan-info-description__button">
            Create your plan
          </button>
        </Link>
      </div>
    </SHomeHeader>
  );
}

export default Header;
