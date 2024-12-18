import styled from "styled-components";

const LeftArrowButtonIcon = styled.div`
 
  display: flex;
  flex-direction: column;
  z-index: 1000;
  padding: 25px;
  margin: 25px;
 
  cursor: pointer;

    :first-child {
      transform: rotate(-45deg);
    }

    :nth-child(2) {
      transform: rotate(45deg);
    }

  @media (max-width: 1400px) {
     margin-bottom: 290px;
  }

  @media (max-width: 1149px) {
    padding: 10px
  }

  .leftArrowIcon {
    width: 30px;
    height: 4px;
    background-color: gray;
    margin: 3px;
    transform-origin: 9px;

    @media (max-width: 1400px){
      
      
    }
    @media (max-width: 699px) {
        display: none;
    }
  }
`;

export {LeftArrowButtonIcon}