import styled from "styled-components";

export const SCountryCenterInfo = styled.div`
  @media only screen and (max-width: 900px) {
    display: flex;
    justify-content: center;
  }

  @media only screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .country-center-container {
    margin-bottom: 168px;
    max-width: 1045px;

    @media only screen and (max-width: 900px) {
      width: 788px;
    }
    @media only screen and (max-width: 425px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 375px;
    }
  }

  .country-center-info-title {
    color: #83888f;
    font-family: "Fraunces" 9pt;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 32px;
    margin-bottom: 72px;
  }

  .center-info-boxes {
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 425px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
