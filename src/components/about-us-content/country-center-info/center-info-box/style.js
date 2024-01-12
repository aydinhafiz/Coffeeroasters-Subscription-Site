import styled from "styled-components";

export const SCenterInfoBox = styled.div`
  @media only screen and (max-width: 900px) {
    width: 323px;
  }

  @media only screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .country-center-info-box-img {
    margin-bottom: 45px;
    @media only screen and (max-width: 425px) {
    }
  }

  .country-center-info-box-title {
    color: #333d4b;
    font-family: "Fraunces";
    font-size: 32px;
    font-style: normal;
    font-weight: 900;
    line-height: 36px;
    margin-bottom: 24px;

    @media only screen and (max-width: 900px) {
      font-size: 24px;
      line-height: 36px;
    }
    @media only screen and (max-width: 425px) {
      text-align: center;
      font-size: 28px;
      line-height: 36px;
      margin-bottom: 30px;
    }
  }

  .country-center-info-box-description {
    text-align: start;
    @media only screen and (max-width: 425px) {
      text-align: center;
      margin-bottom: 45px;
      &:not(:last-child) {
      }
    }
  }

  .center-adress-description {
    display: block;
    color: #333d4b;
    font-family: "Barlow";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
  }
`;
