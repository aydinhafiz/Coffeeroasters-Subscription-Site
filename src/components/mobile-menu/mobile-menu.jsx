import React from "react";
import SMenu from "./mobile-menu.styles";
import { Link } from "react-router-dom";

function MobileMenu() {
  return (
    <SMenu>
      <div className="menu-options">
        <Link to="/" className="route-navbar-mobile-menu">
          <span className="elements-mobile-menu">HOME</span>
        </Link>
        <Link to="/about-Us" className="route-navbar-mobile-menu">
          <span className="elements-mobile-menu">ABOUT US</span>
        </Link>
        <Link to="/subscribe" className="route-navbar-mobile-menu">
          <span className="elements-mobile-menu no-margin">CREATE YOUR PLAN</span>
        </Link>
      </div>
    </SMenu>
  );
}

export default MobileMenu;
