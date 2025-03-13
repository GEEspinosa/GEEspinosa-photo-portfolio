import React from "react";
import {LeftArrowButton} from "../arrow-buttons/left-arrow-button/left-arrow-button";
import {RightArrowButton} from "../arrow-buttons/right-arrow-button/right-arrow-button";
import {ModalIcon, Modal} from "./styled.modal";

function ModalComponent({ showModal, setShowModal, modalSelect, arrowButtonHandler, fadeIn, pageAlbum, page}) {
  let album = pageAlbum[page][0]
  
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
          <LeftArrowButton showModal={showModal} arrowButtonHandler={arrowButtonHandler}/> 
          <div className="middleColumn fadeIn">
            <img alt="test" src={album[modalSelect].image} className={`${fadeIn ? 'triggerFade1' : 'triggerFade2'} ${album[modalSelect].orientation}`} />
            <div className={album[modalSelect].orientation } >
              <h2>{album[modalSelect].description.title}</h2>
              <p >  
                {album[modalSelect].description.location} <br/>
                {album[modalSelect].description.date} <br/>
                <br/>
                {/* Technical Details: <br/> */}
                {album[modalSelect].description.camera} <br/>
                {album[modalSelect].description.film} <br/>
                {album[modalSelect].description.shot} 
              </p>
            </div>
          </div>  
          <RightArrowButton showModal={showModal} arrowButtonHandler={arrowButtonHandler} /> 
        </div>  
      </Modal>     
    </>
  );
}

export default ModalComponent;
