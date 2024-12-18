import styled from "styled-components";

const RightArrowButtonIcon = styled.div`
 
    display: flex;
    flex-direction: column;
    position: fixed
    z-index: 1000;
    padding: 25px;
    margin: 25px;
    cursor: pointer;
    //border: solid;
    

    // :first-child {
    //   transform: rotate(-135deg);
    // }

    // :nth-child(2) {
    //   transform: rotate(135deg);
    // }

    :first-child {
      transform: scaleY(-1) rotate(-45deg) ;
    }

    :nth-child(2) {
      transform: scaleY(-1) rotate(45deg);
    }

    @media (max-width: 1149px) {
    padding: 10px
    //margin: 0px
  }

  .RightArrowIcon {
    width: 30px;
    height: 4px;
    background-color: gray;
    margin: 3px;
    transform-origin: 21px;
    
    @media (max-width: 699px) {
        display: none;
    }
  }
`;

export {RightArrowButtonIcon}