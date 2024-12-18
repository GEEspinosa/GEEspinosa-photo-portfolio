import React from "react";
import imageData from "../../../assets/image-data";
import {LeftArrowButton} from "../arrow-buttons/left-arrow-button/left-arrow-button";
import {RightArrowButton} from "../arrow-buttons/right-arrow-button/right-arrow-button";
import {ModalIcon, Modal } from "./styled.modal";

function ModalComponent({ setShowModal, modalSelect, arrowButtonHandler }) {
  return (
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
        <img alt="test" src={imageData[modalSelect].image}></img>
        <RightArrowButton arrowButtonHandler={arrowButtonHandler}/>
        
      </div>
    </Modal>
  );
}

export default ModalComponent;
