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
  cursor: ${({ width, showModal }) =>
    showModal && width > 790 ? 'pointer' : ''};
  margin-bottom: ${({ rightButton, showModal }) =>
    rightButton === true && showModal === true ? '210px' : '0px'};

  &:hover {
    background-color: ${({ width, showModal }) =>
      showModal && width > 790 ? 'gainsboro' : ''};
  }

  :first-child {
    transform: scaleY(-1) rotate(-45deg);
  }

  :nth-child(2) {
    transform: scaleY(-1) rotate(45deg);
  }

  @media (max-width: 1400px) {
    margin-bottom: ${({ showModal }) => (showModal === true ? '190px' : '0px')};
  }

  @media only screen 
        and (max-height: 575px)
        and (orientation: landscape) 
      {
        margin-bottom: 20px;
      }
    }

  .RightArrowIcon {
    width: 24px;
    height: 4px;
    background-color: gray;
    pointer-events: none;
    margin: 3px;
    transform-origin: 15px;

    @media (max-width: 790px) {
      display: ${({ showModal }) => (showModal ? 'none' : '')};
    }
  }
`;

export { RightArrowButtonIcon };
