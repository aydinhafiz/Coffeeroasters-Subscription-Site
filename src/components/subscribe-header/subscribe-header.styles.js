import styled from "styled-components";

export const SSubscribeHeader = styled.div`
  margin-top: 48px;
  background-image: url("./assets/plan/desktop/image-hero-blackcup.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  padding: 134px 0 134px 85px;
  margin-bottom: 155px;

  @media only screen and (max-width: 900px) {
    margin: 0px auto 250px auto;
    margin-bottom: 203px;
    background-image: url("/assets/plan/desktop/image-hero-blackcup.jpg");
    width: 789px;
    padding: 104px 233px 104px 58px;
    background-position: 50% 50%;
    border-radius: 10px;
  }

  @media only screen and (max-width: 760px) {
    width: 760px;
  }
  @media only screen and (max-width: 750px) {
    width: 749px;
  }

  @media only screen and (max-width: 425px) {
    margin: 0px auto 250px auto;
    margin-bottom: 203px;
    background-image: url("/assets/plan/mobile/image-hero-blackcup.jpg");
    width: 375px;
    padding: 101px 24px 136px 24px;
    background-position: 50% 50%;
    border-radius: 10px;
  }

  .subscribe-info-text {
    max-width: 445px;
  }

  .subscribe-header-title {
    color: #fefcf7;
    font-family: "Fraunces";
    font-size: 72px;
    font-style: normal;
    font-weight: 900;
    line-height: 72px;

    margin-bottom: 32px;

    @media only screen and (max-width: 900px) {
      margin-bottom: 24px;
      font-size: 48px;
      line-height: 48px;
    }

    @media only screen and (max-width: 425px) {
      text-align: center;
      font-size: 40px;
      line-height: 40px;
    }
  }

  .subscribe-header-description {
    color: #fefcf7;
    font-family: "Barlow";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;

    @media only screen and (max-width: 900px) {
      font-size: 15px;
      line-height: 25px;
    }

    @media only screen and (max-width: 425px) {
      text-align: center;
      font-size: 15px;
      line-height: 25px;
    }
  }
`;
