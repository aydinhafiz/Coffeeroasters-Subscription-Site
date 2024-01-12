import styled from "styled-components";

export const SOurWord = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 120px;
  gap: 125px;

  @media only screen and (max-width: 900px) {
    justify-content: center;
    gap: 69px;
  }

  @media only screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .our-word-img {
    border-radius: 8px;
    width: 445px;
    height: 520px;
    background-image: url("/assets/about/desktop/image-commitment.jpg");
    background-repeat: no-repeat;
    @media only screen and (max-width: 900px) {
      width: 281px;
      height: 470px;
      background-image: url("/assets/about/tablet/image-commitment.jpg");
    }

    @media only screen and (max-width: 425px) {
      background-image: url("/assets/about/desktop/image-commitment.jpg");
      width: 375px;
      height: 500px;
    }
  }

  .our-word-text {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    max-width: 540px;

    @media only screen and (max-width: 900px) {
      align-items: start;
      text-align: start;
      /* margin-right: 110px; */
      width: 375px;
      margin-left: 0px;
    }

    @media only screen and (max-width: 425px) {
      align-items: center;
      justify-content: center;
    }
  }

  .our-word-title {
    color: #333d4b;
    font-family: "Fraunces";
    font-size: 40px;
    font-style: normal;
    font-weight: 900;
    line-height: 48px;
    margin-bottom: 32px;

    @media only screen and (max-width: 900px) {
      color: #333d4b;
      font-family: "Fraunces";
      font-size: 32px;
      font-style: normal;
      font-weight: 900;
      line-height: 48px;
      margin-right: 15px;
    }

    @media only screen and (max-width: 425px) {
      color: #333d4b;
      text-align: center;
      font-size: 32px;
      line-height: 48px;
    }
  }

  .our-word-description {
    color: #333d4b;
    font-family: "Barlow";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    opacity: 0.8;

    @media only screen and (max-width: 900px) {
      color: #333d4b;
      font-family: "Barlow";
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 25px;
      opacity: 0.8;

      max-width: 339px;
    }

    @media only screen and (max-width: 425px) {
      text-align: center;
      font-size: 15px;
      line-height: 25px;
    }
  }
`;
