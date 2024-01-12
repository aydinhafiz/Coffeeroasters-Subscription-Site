import React from "react";
import Navbar from "../components/navbar/navbar";
import SubscribeHeader from "../components/subscribe-header/subscribe-header";
import Steps from "../components/home-content/how-it-works/how-works-steps/how-works-steps";
import CreatePlanForm from "../components/create-plan-form/create-plan-form";
import Footer from "../components/footer/footer";

function Subscribe() {
  return (
    <div className="container">
      <Navbar />
      <SubscribeHeader />
      <Steps type="dark" />
      <CreatePlanForm />
      <Footer />
    </div>
  );
}

export default Subscribe;
