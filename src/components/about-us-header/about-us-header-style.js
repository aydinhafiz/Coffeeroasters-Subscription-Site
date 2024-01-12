import styled from "styled-components";

export const SAboutHeader = styled.div`
  background-image: url("/assets/about/desktop/image-hero-whitecup.jpg");
  width: 100%;
  height: 450px;
  border-radius: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  /* padding: 137px 0px 137px 85px; */
  background-position: 50% 50%;
  margin-bottom: 168px;

  @media only screen and (max-width: 900px) {
    margin: 0px auto 250px auto;
    margin-bottom: 144px;
    width: 789px;
    /* padding: 104px 233px 104px 58px; */
    background-position: 50% 50%;
  }

  @media only screen and (max-width: 425px) {
    padding: 111px 24px 87px 24px;
    margin-bottom: 120px;
    width: 375px;
    background-position: 50% 50%;
    background-image: url("/assets/about/mobile/image-hero-whitecup.jpg");
  }

  .about-us-info-text {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    max-width: 445px;
    text-align: center;
    padding: 137px 0px 137px 85px;

    @media only screen and (max-width: 425px) {
      align-items: center;
      width: 330px;
      text-align: center;
      padding: 0px 0px 0px 0px;
    }
  }

  .about-us-header-title {
    color: #fefcf7;
    font-family: "Fraunces";
    font-size: 40px;
    font-style: normal;
    font-weight: 900;
    line-height: 48px;
    margin-bottom: 24px;

    @media only screen and (max-width: 425px) {
      font-size: 32px;
      line-height: 40px;
    }
  }
  .about-us-header-description {
    color: #fefcf7;
    font-family: "Barlow";
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    opacity: 0.8;
    text-align: start;
    @media only screen and (max-width: 425px) {
      font-size: 15px;
      line-height: 25px;
      text-align: center;
    }
  }
`;
