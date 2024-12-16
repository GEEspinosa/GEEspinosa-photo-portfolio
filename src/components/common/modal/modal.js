import React from "react";
import imageData from "../../../assets/image-data";

import { ModalIcon, Modal } from "./styled.modal";

function ModalComponent({ setShowModal, modalSelect }) {
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
        <img alt="test" src={imageData[modalSelect].image}></img>
      </div>
    </Modal>
  );
}

export default ModalComponent;
