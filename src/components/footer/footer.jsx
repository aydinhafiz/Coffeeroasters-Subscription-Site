import React from "react";
import SFooter from "./footer.styles";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <SFooter>
      <div className="footer-container">
        <div className="left-side">
          <img
            className="footer__logo-img"
            src="/assets/shared/desktop/logo-white.svg"
          ></img>
          <div className="footer__options-buttons">
            <Link to="/" className="option-button-link">
              <span className="option-button">HOME</span>
            </Link>
            <Link to="/about-Us" className="option-button-link">
              <span className="option-button">ABOUT US</span>
            </Link>
            <Link to="/subscribe" className="option-button-link">
              <span className="option-button">CREATE YOUR PLAN</span>
            </Link>
          </div>
        </div>
        <div className="right-side">
          <a href="https://www.facebook.com" className="social-link-facebook ">
            <img
              src="/assets/shared/desktop/icon-facebook.svg"
              alt="Facebook-img"
              className="img-facebook"
            />
          </a>
          <a href="https://www.instagram.com" className="social-link-twitter ">
            <img
              src="/assets/shared/desktop/icon-twitter.svg"
              alt="Twitter-img"
              className="img-twitter"
            />
          </a>
          <a href="https://twitter.com" className="social-link-instagram ">
            <img
              src="/assets/shared/desktop/icon-instagram.svg"
              alt="Instagram-img"
              className="img-instagram"
            />
          </a>
        </div>
      </div>
    </SFooter>
  );
}

export default Footer;
