import styled from "styled-components";

const SNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 44px;
  margin-bottom: 43px;

  .options {
    display: flex;
    @media only screen and (max-width: 900px) {
      padding-right: 60px;
    }

    @media only screen and (max-width: 830px) {
      padding-right: 20px;
    }

    @media only screen and (max-width: 800px) {
      padding-right: 7px;
    }
    @media only screen and (max-width: 780px) {
      padding-right: 0px;
    }

    @media only screen and (max-width: 760px) {
      padding-right: -3px;
    }

    @media only screen and (max-width: 750px) {
      display: none;
    }
  }

  .ham-button {
    display: none;
    background-color: transparent;
    border: none;

    @media only screen and (max-width: 750px) {
      display: block;
      margin-right: 28px;
    }
  }

  .route-navbar {
    text-decoration: none;
  }

  .elements {
    display: flex;
    align-items: center;

    color: #83888f;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 15px;

    letter-spacing: 0.923px;
    text-transform: uppercase;

    cursor: pointer;

    margin-right: 33px;

    @media only screen and (max-width: 750px) {
      color: #333d4b;
      text-align: center;
      font-family: "Fraunces";
      font-size: 24px;
      font-weight: 900;
      line-height: 32px;
      width: 100%;
    }
  }

  .elements:hover {
    color: #333d4b;
  }

  .no-margin {
    margin-right: 0px;
  }

  .logo-img {
    @media only screen and (max-width: 900px) {
      margin-left: 60px;
    }
    @media only screen and (max-width: 425px) {
      margin-left: 25px;
    }

    @media only screen and (max-width: 830px) {
      margin-left: 17px;
    }

    @media only screen and (max-width: 800px) {
      margin-left: 10px;
    }

    @media only screen and (max-width: 780px) {
      margin-left: 5px;
    }
  }
`;

export default SNavbar;
