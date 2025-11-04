import { LeftArrowButton } from '../arrow-buttons/left-arrow-button/left-arrow-button';
import { RightArrowButton } from '../arrow-buttons/right-arrow-button/right-arrow-button';
import { ModalIcon, Modal } from './styled.modal';

function ModalComponent({
  showModal,
  setShowModal,
  modalSelect,
  arrowButtonHandler,
  fadeIn,
  pageAlbum,
  page,
}) {
  if (!showModal) return null;
  const album = pageAlbum[page][0];
  const currentImage = album[modalSelect];

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
          <LeftArrowButton
            showModal={showModal}
            arrowButtonHandler={arrowButtonHandler}
          />
          <div className="middleColumn fadeIn">
            <img
              alt="test"
              src={currentImage.image}
              className={`${fadeIn ? 'triggerFade1' : 'triggerFade2'} ${
                currentImage.orientation
              }`}
            />
            
            <div className={currentImage.orientation}>
              <h2>{currentImage.description.title}</h2>
              <p>
                {currentImage.description.location} <br />
                {currentImage.description.date} <br />
                <br />
                {currentImage.description.camera} <br />
                {currentImage.description.film} <br />
                {currentImage.description.shot}
              </p>
            </div>

{/* <div className={`metaContainer ${currentImage.orientation}`}>
  <h2>{currentImage.description.title}</h2>
  <p>
    {currentImage.description.location} <br />
    {currentImage.description.date} <br />
    <br />
    {currentImage.description.camera} <br />
    {currentImage.description.film} <br />
    {currentImage.description.shot}
  </p>
</div> */}


          </div>
          <RightArrowButton
            showModal={showModal}
            arrowButtonHandler={arrowButtonHandler}
          />
        </div>
      </Modal>
    </>
  );
}

export default ModalComponent;
