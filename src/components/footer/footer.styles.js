import styled from "styled-components";

const SFooter = styled.div`
  @media only screen and (max-width: 900px) {
    display: flex;
    justify-content: center;
  }

  .footer-container {
    background: #2c343e;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 47px 85px;
    @media only screen and (max-width: 900px) {
      flex-direction: column;
      padding: 54px 225px;
    }

    @media only screen and (max-width: 425px) {
      width: 375px;
      padding: 54px 103px;
    }
  }

  .left-side {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    gap: 102px;
    @media only screen and (max-width: 900px) {
      flex-direction: column;
      gap: 32px;
    }
  }

  .footer__options-buttons {
    position: absolute;
    top: 0;
    right: -402px;
    margin-bottom: 65px;

    @media only screen and (max-width: 900px) {
      position: static;
      margin-left: 60px;
    }

    @media only screen and (max-width: 425px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: static;
      margin-left: 0px;
    }
  }

  .option-button {
    display: inline-block;
    color: #83888f;
    font-family: "Barlow";
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: 0.923px;
    text-transform: uppercase;
    opacity: 0.5;
    margin-right: 33px;
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 33px;
    }

    &:hover {
      color: #fefcf7;
    }
    @media only screen and (max-width: 425px) {
      margin-right: 0;
    }
  }

  .right-side {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 120px;
  }

  .footer__logo-img {
    @media only screen and (max-width: 900px) {
    }
  }
`;

export default SFooter;
