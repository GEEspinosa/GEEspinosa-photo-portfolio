import styled from 'styled-components';

const RightArrowButtonIcon = styled.div`
  visibility: ${({ showModal, rightButton }) =>
    showModal === true || rightButton === true ? 'visible' : 'hidden'};
  display: flex;
  flex-direction: column;
  z-index: 1000;
  padding: 25px;
  margin: ${({ showModal }) =>
    showModal === true ? '25px' : '0px 0px 0px 0px'};
  cursor: pointer;
  margin-bottom: ${({ rightButton, showModal }) =>
    rightButton === true && showModal === true ? '210px' : '0px'};
   

  &:hover {
    background-color: gainsboro;
  }

  :first-child {
    transform: scaleY(-1) rotate(-45deg);
  }

  :nth-child(2) {
    transform: scaleY(-1) rotate(45deg);
  }



  @media (max-width: 1400px) {
    margin-bottom: ${({ showModal }) =>
      showModal === true ? '190px' : '0px'};
    // //dev note: 190px vs 310px?
  }

  // @media (max-width: 1149px) {
  //   margin-bottom: 190px;
  // }

  .RightArrowIcon {
    //dev note: width below was 30
    width: 24px;
    height: 4px;
    background-color: ${({portfolioGalleryMidLayout, orientationSelected}) => portfolioGalleryMidLayout || orientationSelected ? 'white' : 'gray'};
    pointer-events: none;
    margin: 3px;

    //dev note: transform-origin below was 21
    transform-origin: 15px;

    @media (max-width: 790px) {
      display: none;
    }
  }
`;

export { RightArrowButtonIcon };
