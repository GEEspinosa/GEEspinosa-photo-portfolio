import styled from "styled-components";

const LeftArrowButtonIcon = styled.div`
 
  display: flex;
  flex-direction: column;
  z-index: 1000; 
  padding: 10px;
  cursor: pointer;

    :first-child {
      transform: rotate(-45deg);
    }

    :nth-child(2) {
      transform: rotate(45deg);
    }


  .leftArrowIcon {
    width: 30px;
    height: 4px;
    background-color: gray;
    margin: 3px;
    transform-origin: 9px;

    @media (max-width: 699px) {
        display: none;
    }
  }
`;

export {LeftArrowButtonIcon}