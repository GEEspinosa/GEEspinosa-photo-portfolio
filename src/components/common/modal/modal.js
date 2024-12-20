import React from "react";
import imageData from "../../../assets/image-data";
import {LeftArrowButton} from "../arrow-buttons/left-arrow-button/left-arrow-button";
import {RightArrowButton} from "../arrow-buttons/right-arrow-button/right-arrow-button";
import {ModalIcon, Modal} from "./styled.modal";

function ModalComponent({ setShowModal, modalSelect, arrowButtonHandler }) {
  return (
    <>
      
      <Modal>
        <div className="container">
          <ModalIcon onClick={() => setShowModal(false)}>
            <div className="modalIconContainer">
              <div className="xIcon" />
              <div className="xIcon" />
              <div className="xIcon" />
            </div>
          </ModalIcon>       
          <LeftArrowButton arrowButtonHandler={arrowButtonHandler}/> 
          
          <div className="middleColumn">
            <img alt="test" src={imageData[modalSelect].image} className={imageData[modalSelect].orientation} />
          

          <div>
            <h2>{imageData[modalSelect].description.title}</h2>
            <p >
              
              {imageData[modalSelect].description.location} <br/>
              {imageData[modalSelect].description.date} <br/>
              <br/>
              {/* Technical Details: <br/> */}
              {imageData[modalSelect].description.camera} <br/>
              {imageData[modalSelect].description.film} <br/>
              {imageData[modalSelect].description.shot} 
            </p>
          </div>

          </div>  
          <RightArrowButton arrowButtonHandler={arrowButtonHandler}/> 
          
        </div>
        
      </Modal>
      
      
    </>
  );
}

export default ModalComponent;
