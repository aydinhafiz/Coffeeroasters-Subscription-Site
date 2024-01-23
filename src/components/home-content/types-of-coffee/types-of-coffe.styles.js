import styled from "styled-components";

export const STypesOfCoffee = styled.div`
  margin-bottom: 188px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;

  @media only screen and (max-width: 900px) {
    justify-content: center;
  }

  @media only screen and (max-width: 675px) {
    display: flex;
    margin-left: 0;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }

  @media only screen and (max-width: 425px) {
    justify-content: center;
    margin-left: 0px;
  }
  @media only screen and (max-width: 515px) {
    justify-content: center;
    margin-left: 0px;
  }

  .our-collection {
    position: absolute;
    color: #83888f;
    text-align: center;
    font-family: "Fraunces";
    font-size: 150px;
    font-style: normal;
    font-weight: 900;
    line-height: 72px;

    top: -80px;
    left: 80px;
    z-index: -1;
    opacity: 0.5;
  }

  /* 
  @media only screen and (max-width: 600px) {
    .coffee-type {
      max-width: 573px;
    }
  } */
`;
