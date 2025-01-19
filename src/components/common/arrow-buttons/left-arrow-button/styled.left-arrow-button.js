import styled from 'styled-components';

const LeftArrowButtonIcon = styled.div`
  visibility: ${({ showModal, leftButton }) =>
    showModal === true || leftButton === true ? 'visible' : 'hidden'};
  display: flex;
  flex-direction: column;
  z-index: 1000;
  padding: 25px;
  margin: ${({ showModal}) =>
    showModal === true ? '25px' : '0px 0px 0px 0px'};

  cursor: pointer;
  margin-bottom: ${({ leftButton, showModal }) => (leftButton === true && showModal === true ? '210px' : '0px')};
  
  &:hover {
    background-color: gainsboro;
  }

  :first-child {
    transform: rotate(-45deg);
  }

  :nth-child(2) {
    transform: rotate(45deg);
  }

  @media (max-width: 1400px) {
    margin-bottom: ${({ showModal }) =>
      showModal === true ? '190px' : '0px'};
   //dev note: 190px vs 310px?
  }


  .leftArrowIcon {
    //dev note: width below was 30
    width: 24px;
    height: 4px;
    background-color: ${({portfolioGalleryMidLayout, orientationSelected}) => portfolioGalleryMidLayout || orientationSelected ? 'white' : 'gray'};
    pointer-events: none;
    margin: 3px;
    transform-origin: 9px;

    @media (max-width: 790px) {
      display: none;
    }
  }
`;

export { LeftArrowButtonIcon };
