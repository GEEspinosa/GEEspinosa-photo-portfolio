import styled from "styled-components";

const LeftArrowButtonIcon = styled.div`
 
  display: flex;
  flex-direction: column;
  z-index: 1000;
  padding: 25px;
  margin: 25px;
  cursor: pointer;
  //border: solid silver;

    :first-child {
      transform: rotate(-45deg);
      
    }

    :nth-child(2) {
      transform: rotate(45deg);
    }

  @media (max-width: 1400px) {
     margin-bottom: 210px;
  }

  .leftArrowIcon {
    //dev note: width below was 30
    width: 24px;
    height: 4px;
    background-color: gray;
    pointer-events: none;
    margin: 3px;
    transform-origin: 9px;

    @media (max-width: 699px) {
        display: none;
    }
  }
`;

export {LeftArrowButtonIcon}