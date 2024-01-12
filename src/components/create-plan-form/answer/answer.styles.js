import styled from "styled-components";

const SAnswer = styled.button`
  padding: 32px 28px 84px 28px;
  max-width: 228px;
  border-radius: 8px;
  background: #f4f1eb;
  border: none;

  @media only screen and (max-width: 425px) {
    padding: 24px 24px 24px 25px;
    max-width: 350px;
    margin-bottom: 16px;
  }

  ${(props) =>
    props.$clicked ? "background:#0E8784; color: #FFF;" : "background:#f4f1eb;"}

  cursor: pointer;
  &:hover {
    background: #fdd6ba;
    @media only screen and (max-width: 900px) {
      background: #0e8784;
    }
  }
  .answer-title {
    color: #333d4b;
    font-family: "Fraunces" 9pt;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: 32px;
    margin-bottom: 28px;

    @media only screen and (max-width: 425px) {
      text-align: start;
    }
  }

  .answer-description {
    color: #333d4b;
    font-family: "Barlow";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;

    @media only screen and (max-width: 425px) {
      text-align: start;
    }
  }
`;

export default SAnswer;
