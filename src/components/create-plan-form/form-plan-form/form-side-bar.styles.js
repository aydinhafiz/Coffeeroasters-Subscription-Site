import styled from "styled-components";

const SFormSideBar = styled.div`
  @media only screen and (max-width: 900px) {
    display: none;
  }
  max-width: 255px;

  .side-bar-steps {
    display: flex;
    padding-bottom: 24px;
    border-bottom: 1px solid rgba(131, 136, 143, 0.5);
    margin-bottom: 24px;
    color: #333d4b;
    opacity: 0.5;
    cursor: pointer;

    &:last-child {
      border-bottom: none;
    }
    &:hover {
      color: #333d4b;
      opacity: 0.7;
    }
  }

  .side-bar-steps-active {
    display: flex;
    padding-bottom: 24px;
    border-bottom: 1px solid rgba(131, 136, 143, 0.5);
    margin-bottom: 24px;
    color: #333d4b;
    cursor: pointer;

    &:last-child {
      border-bottom: none;
    }
    &:hover {
      color: #333d4b;
      opacity: 0.7;
    }
  }

  .steps-num {
    color: rgba(131, 136, 143, 0.5);
    font-family: "Fraunces" 9pt;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 32px;
    margin-right: 28.5px;
    color: inherit;
  }

  .steps-title {
    color: rgba(51, 61, 75, 0.5);
    font-family: "Fraunces" 9pt;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 32px;
    color: inherit;
  }
`;

export default SFormSideBar;
