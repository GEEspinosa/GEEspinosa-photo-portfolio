import styled from "styled-components";

const RightArrowButtonIcon = styled.div`
 
    display: flex;
    flex-direction: column;
    position: fixed
    z-index: 1000;
    padding: 25px;
    margin: 25px;
    cursor: pointer;
    border: solid silver;

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
        margin-bottom: 210px;
    } 

  .RightArrowIcon {
    width: 30px;
    height: 4px;
    background-color: gray;
    pointer-events: none;
    margin: 3px;
    transform-origin: 21px;

    @media (max-width: 699px) {
        display: none;
    }
  }
`;

export {RightArrowButtonIcon}