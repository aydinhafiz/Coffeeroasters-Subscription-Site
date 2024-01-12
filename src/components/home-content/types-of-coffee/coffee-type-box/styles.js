import styled from "styled-components";

export const STypeOfCoffeeBox = styled.div`
  margin-right: 30px;
  text-align: center;

  @media only screen and (max-width: 900px) {
    display: flex;
  }

  @media only screen and (max-width: 425px) {
    margin-bottom: 48px;
    margin-right: 0;
    &:last-child {
      margin-bottom: 0;
    }
    display: block;
  }

  .coffe-type__img {
    /* height: 193px; */
    margin-bottom: 71px;
    width: 255px;

    @media only screen and (max-width: 425px) {
      margin-bottom: 24px;
    }
  }

  .type-coffe-box-text {
    @media only screen and (max-width: 900px) {
      display: flex;
      flex-direction: column;
    }
  }

  .coffee-type__title {
    color: #333d4b;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 32px;
    margin-bottom: 24px;
    width: 255px;

    @media only screen and (max-width: 425px) {
      margin-bottom: 16px;
    }
    cursor: pointer;
  }

  .coffee-type__title-active {
    color: red;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 32px;
    margin-bottom: 24px;
    width: 255px;

    @media only screen and (max-width: 425px) {
      margin-bottom: 16px;
    }
    cursor: pointer;
  }

  .coffee-type__description {
    color: #333d4b;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    width: 255px;

    @media only screen and (max-width: 425px) {
      font-size: 15px;
      line-height: 25px;
    }
  }
`;
