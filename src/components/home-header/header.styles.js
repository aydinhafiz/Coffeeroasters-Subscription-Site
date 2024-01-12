import styled from "styled-components";

export const SHomeHeader = styled.div`
  margin-bottom: 250px;
  position: relative;
  padding: 117px 85px;
  background-image: url("/assets/home/desktop/image-hero-coffeepress.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 10px;

  background-position: 50% 50%;

  @media only screen and (max-width: 900px) {
    margin: 0px auto 250px auto;
    margin-bottom: 203px;
    background-image: url("./assets/home/tablet/image-hero-coffeepress.jpg");
    width: 789px;
    padding: 104px 233px 104px 58px;
    background-position: 50% 50%;
  }

  @media only screen and (max-width: 785px) {
    width: 785px;
  }
  @media only screen and (max-width: 760px) {
    width: 760px;
  }
  @media only screen and (max-width: 740px) {
    width: 740px;
  }
  @media only screen and (max-width: 720px) {
    width: 720px;
  }

  @media only screen and (max-width: 425px) {
    padding: 111px 24px 87px 24px;
    margin-bottom: 120px;
    width: 375px;
    background-position: 50% 50%;
    background-image: url("/assets/home/mobile/image-hero-coffeepress.jpg");
  }

  .create-plan-info__description {
    @media only screen and (max-width: 425px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .create-plan-info-description__title {
    color: #fefcf7;
    font-size: 72px;
    font-style: normal;
    font-weight: 900;
    line-height: 72px;
    margin-bottom: 32px;
    max-width: 493px;

    @media only screen and (max-width: 900px) {
      color: #fefcf7;
      font-family: "Fraunces";
      font-size: 48px;
      font-weight: 900;
      line-height: 48px;
    }

    @media only screen and (max-width: 425px) {
      color: #fefcf7;
      text-align: center;
      font-family: "Fraunces";
      font-size: 40px;
      font-weight: 900;
      line-height: 40px;
      width: 300px;
    }
  }

  .create-plan-info-descriptiono__paragraph {
    color: rgb(254, 252, 247, 0.8);
    font-family: Barlow;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    /* 162.5% */
    max-width: 445px;
    margin-bottom: 56px;

    @media only screen and (max-width: 900px) {
      color: #fefcf7;
      font-family: "Barlow";
      font-size: 15px;
      font-weight: 400;
      line-height: 25px;
    }

    @media only screen and (max-width: 425px) {
      color: #fefcf7;
      text-align: center;
      font-family: "Barlow";
      font-size: 15px;
      font-weight: 400;
      line-height: 25px;
      opacity: 0.7;
      width: 300px;
    }
  }

  .create-plan-info-description__button {
    border: none;
    padding: 15px 31px 16px 31px;
    cursor: pointer;

    color: #fefcf7;
    text-align: center;
    font-family: "Fraunces";
    font-size: 18px;
    font-style: normal;
    font-weight: 900;
    line-height: 25px;

    border-radius: 6px;
    background: #0e8784;

    @media only screen and (max-width: 425px) {
      padding: 15px 31px 16px 31px;
      color: #fefcf7;
      text-align: center;
      font-family: "Fraunces";
      font-size: 18px;
      font-weight: 900;
      line-height: 25px;
      width: 240px;
    }
  }

  .create-plan-info-description__button:hover {
    border-radius: 6px;
    background: #66d2cf;
  }
`;
