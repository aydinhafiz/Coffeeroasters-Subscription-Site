import styled from "styled-components";

const SDecisionPanel = styled.div`
  margin-left: 170px;
  flex: 1;

  @media only screen and (max-width: 900px) {
    margin-left: 0;
  }

  .answers-panel {
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 425px) {
      display: block;
    }
  }
`;

export default SDecisionPanel;
