import React from "react";
import styled from "styled-components";
import SOrderSummary from "./order-summary.styles";

function OrderSummary({ createPlanState }) {
  function returnRelativtext(index) {
    return (
      createPlanState[index].options.find((option) => option.clicked)?.title ||
      "_____"
    );
  }

  return (
    <SOrderSummary>
      <div className="order-summary-info">
        <h2 className="order-summary-title">Order Summary</h2>
        <p className="order-summary-description">
          “I drink my coffee as{" "}
          <span style={{ color: "#0E8784" }}> {returnRelativtext(0)} </span>,
          with a
          <span style={{ color: "#0E8784" }}> {returnRelativtext(1)} </span>{" "}
          type of bean.{" "}
          <span style={{ color: "#0E8784" }}> {returnRelativtext(2)} </span>{" "}
          ground ala{" "}
          <span style={{ color: "#0E8784" }}> {returnRelativtext(3)} </span>,
          sent to me{" "}
          <span style={{ color: "#0E8784" }}> {returnRelativtext(4)} </span>.”
        </p>
      </div>
      <div className="btn-order-summary">
        <button className="create-plan-btn-order-summary">
          Create my plan!
        </button>
      </div>
    </SOrderSummary>
  );
}

export default OrderSummary;
