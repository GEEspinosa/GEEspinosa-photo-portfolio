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
   // margin: 3px;
    margin: 3px;
   // transform-origin: 4px;
    transform-origin: 2px;
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
    // max-height: 100%;
    // max-width: 100%;
    //overscroll-behavior: contain;
  
    @media (max-width: 1400px) {
      width: 100%;
      height: 100%;
      flex-direction: column; 
     //justify-content: flex-start;
      align-items: flex-start;    
    }

    img {
      @media (max-width: 1400px) {
        align-self: center;
      }
    }

    .horizontal {
    
     // border: solid;
      //width: 67%;
      //width: 100%;
      max-height: 70%;
     //min-width: 20%; 
      padding: 20px 20px;
      object-fit: contain; 
      align-self: center;
      
     @media (max-width: 2100px) {
      //width: 67%;
     }
      
    @media  (max-height: 1038px) {
      h2 {

       
       // margin-left: 30px;
       //object-fit: contain;
      }
      p {
       // margin-left: 30px;
      }
    }
    
    

    //   @media  (max-height: 979px) {
    //     h2 {
        
    //       margin-left: 80px;
          
    
    //     }

    //     p {
    //       margin-left: 80px;
    //     }
    //   }


    //   @media  (max-height: 887px) {
    //   h2 {
    //     margin-left: 130px;
    //   }
    //   p {
    //     margin-left: 130px;
    //   }
    // }

    // @media  (max-height: 793px) {
    //   h2 {
    //     margin-left: 180px;
    //   }
    //   p {
    //     margin-left: 180px;
    //   }
    // }

    // @media  (max-height: 693px) {
    //   h2 {
    //     margin-left: 230px;
    //   }
    //   p {
    //     margin-left: 230px;
    //   }
     
    // }

    // @media  (max-height: 603px) {
    //   h2 {
    //     margin-left: 280px;
    //   }
    //   p {
    //     margin-left: 280px;
    //   }
     
    // }

      @media (max-width: 1400px) {
        width: 100%;
        
      }
      
      @media (max-width: 790px) {
        width: 110%;
      }

      @media (max-width: 420px) {
        width: 180%;
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
      
      @media(max-height: 1024px) { 
        h2 {
            margin: auto;
        }
        p {
            margin: auto;
        }
      }
  
      @media (max-width: 790px) {
        width: 90%;
        position: relative;       
      }

      @media (max-width: 420px) {
        width: 125%;
      }     
    }

    h2 {
      //border: solid;
      font-size: 22px;
      max-width: 300px;
      min-width: 300px;
      
      color: gray;
      margin: 40px 10px 10px 10px;
      padding: 0px 30px 0px 30px;
      line-height: 1.5;
      
      @media (max-width: 1400px) {
        font-size: 18px;
        margin: 0px;
        padding: 0px;
        align-self: flex-end;
      }

      @media (max-width: 375px ) {
          font-size: 18px;
          line-height: 1.2
          padding: 0px 0px 0px 0px;
      }
    }

    p {
      //border: solid;
      max-width: 300px;
      min-width: 300px;
      font-size: .9em;
      color: gray;
      display: block;
      margin: 10px 0px 40px 10px;
      padding: 0px 80px 0px 30px;
      line-height: 1.2;
      
    
      
        @media (max-width: 1400px){
          //display: flex;
          font-size: 14px;
          margin: 0px;
          padding: 0px;
        }


        @media (max-width: 375px ) {
          padding: 20px 0px 0px 0px;
          line-height: 1.2;
        }
    }
  }
  
`;


export {Modal, ModalIcon};
