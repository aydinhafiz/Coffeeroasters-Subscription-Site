import React, { useState } from "react";
import SNavbar from "./navbar.styles";
import { Link } from "react-router-dom";
import ScrollToTop from "../scroll-to-top";
import MobileMenu from "../mobile-menu/mobile-menu";

function Navbar() {
  const [isHamMenuOpen, setIsHamMenuOpen] = useState(false);

  function handleHamClick() {
    setIsHamMenuOpen((prevState) => {
      return !prevState;
    });
  }

  return (
    <SNavbar>
      <ScrollToTop />

      <Link to="/" className="logo-link">
        <img
          src="/assets/shared/desktop/logo.svg"
          alt=""
          className="logo-img"
        />
      </Link>

      <button onClick={handleHamClick} className="ham-button">
        <img
          src={
            isHamMenuOpen
              ? "./assets/shared/mobile/icon-close.svg"
              : "./assets/shared/mobile/icon-hamburger.svg"
          }
          alt=""
        />
      </button>

      {isHamMenuOpen && <MobileMenu />}
      <div className="options">
        <Link to="/" className="route-navbar">
          <span className="elements">HOME</span>
        </Link>
        <Link to="/about-us" className="route-navbar">
          <span className="elements">ABOUT US</span>
        </Link>
        <Link to="/subscribe" className="route-navbar">
          <span className="elements no-margin">CREATE YOUR PLAN</span>
        </Link>
      </div>
    </SNavbar>
  );
}


export default Navbar;
