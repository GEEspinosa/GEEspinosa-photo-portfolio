import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/common/header/header';
import Landing from './components/pages/landing/landing';
import Portfolio from './components/pages/portfolio';
import About from './components/pages/about';
import ModalComponent from './components/common/modal/modal';
import imageData from './assets/image-data';

const initialMessage = {
  title: 'select an album',
  location: '',
  date: '',
  camera: '',
  film: '',
  shot: '',
};

function App() {
  const [open, setOpen] = useState(false);
  const [modalSelect, setModalSelect] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [smallLandingLayout, setSmallLandingLayout] = useState(false);
  const [album, setAlbum] = useState('cover');
  const [portfolio, setPortfolio] = useState([]);
  const [slide, setSlide] = useState(null);

  const [descriptionsArray, setDescriptionsArray] = useState([]);
  const [slideMessage, setSlideMessage] = useState(initialMessage);

  function imageClickHandler(id) {
    setModalSelect(id);
    setShowModal(true);
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 710) {
      setOpen(false);
    }
  });

  function keyDownHandler(e) {
    if (e.key === 'Escape') {
      setShowModal(false);
    }
    if (e.key === 'ArrowLeft' && showModal) {
      let left = modalSelect - 1;
      if (left >= 0) {
        setModalSelect(left);
      } else {
        setModalSelect(imageData.length - 1);
      }
    }
    if (e.key === 'ArrowRight' && showModal) {
      let right = modalSelect + 1;
      if (right < imageData.length - 1) {
        setModalSelect(right);
      } else {
        setModalSelect(0);
      }
    }
    if (e.key === 'ArrowLeft' && slide > 0) {
      setSlide(slide - 1);
    }
    if (e.key === 'ArrowRight' && slide < portfolio.length - 1) {
      setSlide(slide + 1);
    }
  }

  const arrowButtonHandler = direction => {
    if (direction === 'Left' && showModal) {
      let left = modalSelect - 1;
      if (left >= 0) {
        setModalSelect(left);
      } else {
        setModalSelect(imageData.length - 1);
      }
    }
    if (direction === 'Right' && showModal) {
      let right = modalSelect + 1;
      if (right < imageData.length - 1) {
        setModalSelect(right);
      } else {
        setModalSelect(0);
      }
    }
    if (direction === 'Left' && slide > 0) {
      setSlide(slide - 1);
    }
    if (direction === 'Right' && slide < portfolio.length - 1) {
      setSlide(slide + 1);
    }
  };

  //dev note: because of react re-renders,
  //eventlisteners must be added and removed with useEffect hook!!!
  //the eventlistener calls the above declared keyDownHandler
  // innerWidth either 802px or 956px?

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);
    return () => document.removeEventListener('keydown', keyDownHandler);
  });

  useEffect(() => {
    if (window.innerWidth <= 956) {
      setSmallLandingLayout(true);
    } else {
      setSmallLandingLayout(false);
    }
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {showModal && (
        <ModalComponent
          showModal={showModal}
          setShowModal={setShowModal}
          modalSelect={modalSelect}
          arrowButtonHandler={arrowButtonHandler}
        />
      )}

      <Header open={open} setOpen={setOpen} showModal={showModal} />
      <Routes>
        <Route
          path="/"
          element={
            <Landing
              imageClickHandler={imageClickHandler}
              smallLandingLayout={smallLandingLayout}
              setSmallLandingLayout={setSmallLandingLayout}
            />
          }
        />
        <Route
          path="/portfolio"
          element={
            <Portfolio
              album={album}
              setAlbum={setAlbum}
              portfolio={portfolio}
              setPortfolio={setPortfolio}
              slide={slide}
              setSlide={setSlide}
              arrowButtonHandler={arrowButtonHandler}
              descriptionsArray={descriptionsArray}
              setDescriptionsArray={setDescriptionsArray}
              slideMessage={slideMessage}
              setSlideMessage={setSlideMessage}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
