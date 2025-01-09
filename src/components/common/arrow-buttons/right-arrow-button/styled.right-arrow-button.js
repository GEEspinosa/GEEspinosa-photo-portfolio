import styled from "styled-components";

const RightArrowButtonIcon = styled.div`
 visibility: ${({showModal, rightButton}) => showModal === true || rightButton === true ? 'visible' : 'hidden'};
    display: flex;
    flex-direction: column;
    position: fixed
    z-index: 1000;
    padding: 25px;
    margin: 25px;
    cursor: pointer;
    margin-bottom: ${({rightButton}) =>  rightButton === true ? '210px' : '0px'};
    //border: solid silver;

    :hover {
      background-color: red;
    }
    

    :first-child {
      transform: scaleY(-1) rotate(-45deg);
    }

    :nth-child(2) {
      transform: scaleY(-1) rotate(45deg);
    }

    @media (max-width: 1400px) {
     margin-bottom: ${({showModal}) =>  showModal === true ? '310px' : '210px'};
     margin-bottom: 190px;
  }

  // @media (max-width: 1149px) {
  //   margin-bottom: 190px;
  // }

  .RightArrowIcon {
    
    //dev note: width below was 30
    width: 24px;
    height: 4px;
    background-color: gray;
    pointer-events: none;
    margin: 3px;

    //dev note: transform-origin below was 21
    transform-origin: 15px;

    @media (max-width: 699px) {
        display: none;
    }
  }
`;

export {RightArrowButtonIcon}