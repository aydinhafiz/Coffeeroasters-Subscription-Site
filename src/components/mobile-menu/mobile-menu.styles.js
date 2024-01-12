import styled from "styled-components";

const SMenu = styled.div`
  @media only screen and (max-width: 750px) {
    position: absolute;
    height: 600px;
    left: 20px;
    right: 0;
    top: 115px;
    background: linear-gradient(
      360deg,
      rgba(254, 252, 247, 0.5) 0%,
      #fefcf7 55.94%
    );
    z-index: 100;
  }

  .menu-options {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .elements-mobile-menu {
    @media only screen and (max-width: 750px) {
      color: #333d4b;
      font-family: "Fraunces";
      font-size: 24px;
      font-weight: 900;
      line-height: 32px;
      margin-bottom: 32px;
    }
  }

  .route-navbar-mobile-menu {
    @media only screen and (max-width: 750px) {
      text-decoration: none;
      margin-bottom: 32px;
    }
  }
`;

export default SMenu;
