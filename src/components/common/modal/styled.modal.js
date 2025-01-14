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
    //dev note: changed size because it was too big
    //width: 40px;
    width: 30px;
    height: 3px;
    background-color: gray;
    margin: 3px;
    transform-origin: 2px;

    @media (max-width: 430px) {
      position: relative;
      top: -20px;
    }
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

    img {
      @media (max-width: 1400px) {
        align-self: center;
      }
    }

    .horizontal {
      max-height: 70%;
      padding: 20px 20px;
      object-fit: contain; 
      align-items: center;
         
     @media (max-width: 1950px){
      width: 67%;
     }

     @media (max-height: 1038px) {
      width: auto;
     }
      
      @media (max-width: 1400px) {
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        //align-items: flex-start;    
      }
      
      @media (max-width: 790px) {
        width: 110%;
        padding: 10px;
      }

      @media (max-width: 430px) {
        width: 180%;
        padding: 10px;
      }
    }

    .vertical {
      max-height: 70%;
      min-width: 25%; 
      padding: 20px 20px;
      object-fit: contain; 
      align-self: center;
      
      @media(max-width: 1400px) {
        text-align: center;
      }
  
      @media (max-width: 790px) {
        position: relative; 
        padding: 10px;      
      }

      @media (max-width: 430px) {
        max-height: 55%;
        padding: 10px;
      }     
    }

    h2 {
      font-size: 22px;
      max-width: 12vw;
      min-width: 12vw;
      color: gray;
      margin: 40px 10px 10px 10px;
      padding: 0px 30px 0px 30px;
      line-height: 1.5;
         
      @media (max-width: 1400px) {
        font-size: 18px;
        margin: 0px 0px 10px 0px;
        padding: 0px
        max-width: 35vw;
        min-width: 35vw;         
      }

      @media (max-width: 430px ) {
          font-size: 18px;
          line-height: 1.2;
          padding: 0px;         
      }
    }

    p {
      max-width: 12vw;
      min-width: 12vw;
      font-size: .9em;
      color: gray;
      display: block;
      margin: 10px 0px 40px 10px;
      padding: 0px 30px 0px 30px;
      line-height: 1.2;
       
        @media (max-width: 1400px){
          font-size: 14px;
          max-width: 35vw;
          min-width: 25vw;
          margin: 0px;
          padding: 0px;
        }

        @media (max-width: 430px ) {
          margin: 15px 0px 0px 0px;
          line-height: 1.2;         
        }
    }
  }
  
`;


export {Modal, ModalIcon};
