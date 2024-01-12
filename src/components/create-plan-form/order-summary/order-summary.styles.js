import styled from "styled-components";

const SOrderSummary = styled.div`
  margin-top: 88px;
  justify-content: space-between;
  @media only screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .order-summary-info {
    padding: 27px 64px 27px 64px;
    background: #2c343e;
    margin-bottom: 40px;
  }

  .order-summary-title {
    color: #fff;
    font-family: "Barlow";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    text-transform: uppercase;
    opacity: 0.5;
  }

  .order-summary-description {
    color: #fff;
    font-family: "Fraunces" 9pt;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 40px;
  }

  .btn-order-summary {
    display: flex;
    justify-content: end;
  }

  .create-plan-btn-order-summary {
    padding: 15px 35.5px 16px 35.5px;
    border-radius: 6px;
    background: #e2dedb;
    border: none;

    color: #fefcf7;
    text-align: center;
    font-family: "Fraunces" 9pt;
    font-size: 18px;
    font-style: normal;
    font-weight: 900;
    line-height: 25px;
    margin-bottom: 50px;
    cursor: pointer;
    &:hover {
      background: #66d2cf;
    }
  }
`;

export default SOrderSummary;
