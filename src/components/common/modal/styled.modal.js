import styled from "styled-components";

const ModalIcon = styled.div`
  position: fixed;
  
  top: 44px;
  right: 4%;

  .modalIconContainer {
    display: flex;
    flex-direction: column;
    z-index: 1000;

    :hover {
      cursor: pointer;
    }

    :first-child {
      transform: rotate(45deg);
    }

    :nth-child(2) {
      opacity: 0;
    }

    :nth-child(3) {
      transform: rotate(-45deg);
    }
  }

  .xIcon {
    width: 40px;
    height: 5px;
    background-color: gray;
    margin: 3px;
    transform-origin: 4px;
  }
`;

const Modal = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  position: fixed;
  z-index: 1000;
   
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    
  }

  img {
    
    max-height: 75%;
    min-width: 25%; dev note: is this worth it? 75%?
    padding: 20px 40px;
    object-fit: contain;


   
    @media (max-width: 699px) {
        min-width: 90%;
    }
  }

  p {
    flex-direction: column;
    justify-content: flex-start;
    padding: 40px 100px 40px 40px;

    @media (max-width: 1149px){
      display: none;
    }
  }
`;

export {Modal, ModalIcon};
