import styled from "styled-components";

export const SCoffeeQualityInfo = styled.div`
  margin-bottom: 168px;
  margin-top: 308px;
  @media only screen and (max-width: 900px) {
    display: flex;
    justify-content: center;
    margin-bottom: 144px;
  }

  @media only screen and (max-width: 425px) {
    display: flex;
    justify-content: center;
    margin-bottom: 120px;
  }

  .coffee-quality-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 88px 85px 88px 85px;
    height: 474px;
    border-radius: 10px;
    background: #2c343e;

    @media only screen and (max-width: 900px) {
      padding: 224px 74px 67px 74px;
      justify-content: center;
      position: relative;
    }
    @media only screen and (max-width: 425px) {
      padding: 142px 24px 61px 24px;
      justify-content: center;
      position: relative;
    }
  }

  .coffee-quality-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    text-align: start;
    max-width: 540px;

    @media only screen and (max-width: 900px) {
      align-items: center;
      text-align: center;
      position: relative;
    }

    @media only screen and (max-width: 425px) {
      align-items: center;
      text-align: center;
      position: relative;
    }
  }

  .coffee-quality-title {
    color: #fefcf7;
    font-family: "Fraunces";
    font-size: 40px;
    font-style: normal;
    font-weight: 900;
    line-height: 48px;
    margin-bottom: 32px;

    @media only screen and (max-width: 900px) {
      color: #fefcf7;
      text-align: center;
      font-family: "Fraunces";
      font-size: 32px;
      font-style: normal;
      font-weight: 900;
      line-height: 48px;
    }

    @media only screen and (max-width: 425px) {
      color: #fefcf7;
      text-align: center;
      font-size: 28px;
      line-height: 28px;
      margin-bottom: 24px;
    }
  }

  .coffee-quality-description {
    color: #fefcf7;
    font-family: "Barlow";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    opacity: 0.8;

    @media only screen and (max-width: 900px) {
      color: #fefcf7;
      text-align: center;
      font-family: "Barlow";
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 25px;
    }

    @media only screen and (max-width: 425px) {
      color: #fefcf7;
      text-align: center;
      font-size: 15px;
      line-height: 25px;
    }
  }

  .quality-img {
    margin-bottom: 88px;
    background-image: url("/assets/about/desktop/image-quality.jpg");
    width: 445px;
    height: 474px;

    @media only screen and (max-width: 900px) {
      margin-bottom: 0;
      position: absolute;
      background-image: url("/assets/about/tablet/image-quality.jpg");
      width: 540px;
      height: 300px;
      border-radius: 10px;
      top: -150px;
    }

    @media only screen and (max-width: 425px) {
      margin-bottom: 0;
      position: absolute;
      background-image: url("/assets/about/mobile/image-quality.jpg");
      width: 379px;
      height: 250px;
      border-radius: 10px;
      top: -150px;
    }
  }
`;
