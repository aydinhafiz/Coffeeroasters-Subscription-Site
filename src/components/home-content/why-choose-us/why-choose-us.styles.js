import styled from "styled-components";

export const SWhyChooseUs = styled.div`
  position: relative;
  padding: 100px 80px 0px 80px;
  &::after {
    content: "";
    background: #2c343e;
    top: 0;
    right: 0;
    position: absolute;
    height: 577px;
    width: 100%;
    border-radius: 10px;
    z-index: -1;
  }
  /* height: 577px; */

  @media only screen and (max-width: 890px) {
    padding: 56px;
  }

  @media only screen and (max-width: 600px) {
    padding: 64px 24px 0px 24px;
    &::after {
      content: "";
      height: 902px;
      width: 100%;
      border-radius: 10px;
      z-index: -1;
    }
  }

  .why-choose-us-intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 86px;
    @media only screen and (max-width: 890px) {
      margin-bottom: 70px;
    }
    @media only screen and (max-width: 600px) {
      background: rgba(44, 52, 62, 0.5);
    }
  }

  .why-choose-us-title {
    color: #fefcf7;
    font-size: 40px;
    font-style: normal;
    font-weight: 900;
    line-height: 48px;
    margin-bottom: 32px;

    @media only screen and (max-width: 890px) {
      font-size: 32px;
      margin-bottom: 24px;
    }

    @media only screen and (max-width: 600px) {
      font-size: 28px;
      line-height: 28px;
      margin-bottom: 24px;
    }
  }

// WHY CHOOSE US SECTİON ında 422 px den sonra sağ terefe background işlemir ve orası ağ olur
// Pixel kiçildikçe sağ ve yuxarı terefden ağ olur.


  .why-choose-us-description {
    color: #fefcf7;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    opacity: 0.8;
    max-width: 538px;

    @media only screen and (max-width: 890px) {
      font-size: 15px;
      line-height: 25px;
    }

    @media only screen and (max-width: 600px) {
      max-width: 279px;
    }
  }

  .why-choose-us-boxes {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
    @media only screen and (max-width: 890px) {
      gap: 24px;
    }
  }

  .choose-us-box:nth-child(1) {
    margin-left: 85px;
    margin-right: 30px;
  }
  .choose-us-box:nth-child(2) {
    margin-right: 30px;
  }

  /* @media only screen and (max-width: 600px) {
    padding: 64px 24px 0px 24px;
  } */
`;
