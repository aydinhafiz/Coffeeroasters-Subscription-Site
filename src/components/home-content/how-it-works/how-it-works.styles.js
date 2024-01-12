import styled from "styled-components";

export const SHowWorks = styled.div`
  margin-top: 200px;

  @media only screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .how-it-works-title {
    color: #83888f;
    font-size: 24px;
    font-weight: 900;
    line-height: 32px;
    padding-left: 85px;

    @media only screen and (max-width: 1084px) {
      padding-left: 29px;
    }

    @media only screen and (max-width: 900px) {
      width: 255px;
      padding-left: 39px;
    }

    @media only screen and (max-width: 425px) {
      text-align: start;
      margin-right: 24px;
      margin-left: 24px;
    }
  }

  .how-create-plan-button {
    color: #fefcf7;
    text-align: center;
    font-family: "Fraunces" 9pt;
    font-size: 18px;
    font-style: normal;
    font-weight: 900;
    line-height: 25px;
    border-radius: 6px;
    background: #0e8784;

    padding: 15px 31px 16px 31px;
    border: none;
    margin-left: 85px;
    margin-bottom: 200px;
    cursor: pointer;
    &:hover {
      border-radius: 6px;
      background: #66d2cf;
    }

    @media only screen and (max-width: 900px) {
      margin-left: 39px;
    }

    @media only screen and (max-width: 425px) {
      margin-right: 55px;
      margin-left: 55px;
    }
  }

  /* .steps-circle {
    margin-top: 80px;
  }

  .step {
    display: inline-block;
    background-color: #fefcf7;
    border-radius: 50%;
    color: white;
    width: 31px;
    height: 31px;
    border: 2px solid #0e8784;
    margin-right: 349px;
  }

  .step:last-child {
    margin-right: 0px;
  } */

  /* .step-line {
    border-right: 9px solid #fdd6ba;
  } */
`;
