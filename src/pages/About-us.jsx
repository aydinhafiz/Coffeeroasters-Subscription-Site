import React from "react";
import Navbar from "../components/navbar/navbar";
import { SAboutUs } from "../components/about-us/about-us.style";
import AboutUsHeader from "../components/about-us-header/about-us-header";
import AboutUsContent from "../components/about-us-content/about-us-content";
import Footer from "../components/footer/footer";

function AboutUs() {
  return (
    <div className="container">
      <SAboutUs>
        <Navbar />

        <AboutUsHeader />
        <AboutUsContent />

        <Footer />
      </SAboutUs>
    </div>
  );
}

export default AboutUs;
