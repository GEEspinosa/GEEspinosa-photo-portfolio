import styled from 'styled-components';

const LeftArrowButtonIcon = styled.div`
  visibility: ${({ showModal, leftButton }) =>
    showModal === true || leftButton === true ? 'visible' : 'hidden'};
  display: flex;
  flex-direction: column;
  z-index: 1000;
  padding: 25px;
  margin: 25px;
  cursor: pointer;
  margin-bottom: ${({ leftButton }) => (leftButton === true ? '210px' : '0px')};
  //border: solid silver;

  :first-child {
    transform: rotate(-45deg);
  }

  :nth-child(2) {
    transform: rotate(45deg);
  }

  @media (max-width: 1400px) {
    margin-bottom: ${({ showModal }) =>
      showModal === true ? '310px' : '210px'};
    margin-bottom: 190px;
  }

  // @media (max-width: 1149px) {
  //   margin-bottom: 190px;
  // }

  .leftArrowIcon {
    //dev note: width below was 30
    width: 24px;
    height: 4px;
    background-color: gray;
    pointer-events: none;
    margin: 3px;
    transform-origin: 9px;

    @media (max-width: 790px) {
      display: none;
    }
  }
`;

export { LeftArrowButtonIcon };
