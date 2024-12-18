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
 
  .middleColumn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  
    @media (max-width: 1400px) {

      width: 100%;
      height: 100%;
      flex-direction: column; 
 
    }

    .horizontal {
      width: 62%;
      max-height: 70%;
      min-width: 25%; 
      border: solid;
      padding: 20px 20px;
      object-fit: contain; 

      @media (max-width: 1400px) {
        width: 100%;
      }
      
      @media (max-width: 699px) {
        width: 100%;
        height: 100%;
        position: relative;
        bottom: 40%;
      }
    }

    .vertical {
      //width: 100%;
      //height: 100%
      max-height: 70%;
      min-width: 25%; 
      border: solid;
      padding: 20px 20px;
      object-fit: contain; 
      
      @media (max-width: 699px) {
        width: 100%;
        height: 100%;
        position: relative;
        bottom: 40%;
      }
    }

    p {
      font-size: 1.1em;
      color: gray;
      display: block;
      //border: solid;
      margin: 10px 0px 10px 10px;
      padding: 30px 80px 30px 30px;
      
        @media (max-width: 1149px){
          display: flex;
        }

        @media (max-width: 699px) {
          position: fixed;
          top: 50%;       
        }
    }
  }
  


    
  


  // p {
  //   font-size: 1.1em;
  //   color: gray;
  //   display: block;
  //   margin: 10px 0px 10px 10px;
  //   padding: 30px 80px 30px 30px;
  //   @media (max-width: 1149px){
  //     display: none;
  // }


   


 
  
`;



const smallWindowPlacard = styled.div`

  display: flex;
  background-color: black;
`;

export {Modal, ModalIcon, smallWindowPlacard};
