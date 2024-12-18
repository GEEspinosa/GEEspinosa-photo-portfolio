import styled from "styled-components";

const RightArrowButtonIcon = styled.div`
 
    display: flex;
    flex-direction: column;
    position: fixed
    z-index: 1000;
    padding: 10px;
    cursor: pointer;
   
    

    :first-child {
      transform: rotate(-135deg);
    }

    :nth-child(2) {
      transform: rotate(135deg);
    }


  .RightArrowIcon {
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

export {RightArrowButtonIcon}