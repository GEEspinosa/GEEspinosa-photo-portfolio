import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/common/header/header';

//dev note: page component imports
import Landing from './components/pages/landing/landing';
import Location from './components/pages/location/location';
import People from './components/pages/people/people';
import StillLife from './components/pages/still-life/still-life';
import Performance from './components/pages/performance/performance';
import About from './components/pages/about/about';

import ModalComponent from './components/common/modal/modal';
import imageData from './assets/image-data';
import useWindowSize from './hooks/useWindowSize';
import { scrollToTop } from './utils/utils';

function App() {
  const [open, setOpen] = useState(false);
  const [pageAlbum, setPageAlbum] = useState({
    landing: [],
    location: [],
    people: [],
    stillLife: [],
    performance: [],
  });
  const [page, setPage] = useState('landing');
  const [modalSelect, setModalSelect] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  //dev note: destructuring from custom hook
  const { width } = useWindowSize();

  let album = pageAlbum[page][0] || [];

  function imageClickHandler(id) {
    setModalSelect(id);
    setShowModal(true);
  }

  function fadeHandler() {
    setFadeIn(!fadeIn);
  }

  function navClickHander (link) {
    setPage(link)
    scrollToTop()
  }

  function keyDownHandler(e) {
    if (e.key === 'Escape') {
      setShowModal(false);
    }
    if (e.key === 'ArrowLeft' && showModal) {
      let left = modalSelect - 1;
      if (left >= 0) {
        setModalSelect(left);
      } else {
        setModalSelect(album.length - 1);
      }
    }
    if (e.key === 'ArrowRight' && showModal) {
      let right = modalSelect + 1;
      if (right < album.length) {
        setModalSelect(right);
      } else {
        setModalSelect(0);
      }
    }
    fadeHandler()
  }

  const arrowButtonHandler = direction => {
    if (direction === 'Left' && showModal) {
      let left = modalSelect - 1;
      if (left >= 0) {
        setModalSelect(left);
      } else {
        setModalSelect(album.length - 1);
      }
    }
    if (direction === 'Right' && showModal) {
      let right = modalSelect + 1;
      if (right < album.length) {
        setModalSelect(right);
      } else {
        setModalSelect(0);
      }
    }
    fadeHandler();
  };

  //dev note: was 710, but changed
  useEffect(() => {
    if (width > 1111) {
      setOpen(false);
    }
  }, [width]);

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);
    return () => document.removeEventListener('keydown', keyDownHandler);
  });

  useEffect(() => {
    const filteredImages = imageData.filter(img => page in img.album);
    filteredImages.sort((a, b) => (a.album[page] < b.album[page] ? -1 : 0));
    filteredImages.map((img, key) => (img.id = key));
    setPageAlbum({ ...pageAlbum, [page]: [filteredImages] });
    setIsLoaded(true);
  }, [page]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {showModal && (
        <ModalComponent
          showModal={showModal}
          setShowModal={setShowModal}
          modalSelect={modalSelect}
          arrowButtonHandler={arrowButtonHandler}
          fadeIn={fadeIn}
          setFadeIn={setFadeIn}
          //fadeHandler={fadeHandler}
          pageAlbum={pageAlbum}
          page={page}
        />
      )}
      <Header
        open={open}
        setOpen={setOpen}
        showModal={showModal}
        setPage={setPage}
        navClickHander = {navClickHander}
      />
      <Routes>
        {isLoaded && (
          <Route
            path="/"
            element={
              <Landing
                imageClickHandler={imageClickHandler}
                pageAlbum={pageAlbum}
                page={page}
              />
            }
          />
        )}
        <Route
          path="/location"
          element={
            <Location
              imageClickHandler={imageClickHandler}
              pageAlbum={pageAlbum}
              page={page}
            />
          }
        />
        <Route
          path="/people"
          element={
            <People
              imageClickHandler={imageClickHandler}
              pageAlbum={pageAlbum}
              page={page}
            />
          }
        />
        <Route
          path="/still-life"
          element={
            <StillLife
              imageClickHandler={imageClickHandler}
              pageAlbum={pageAlbum}
              page={page}
            />
          }
        />
        <Route
          path="/performance"
          element={
            <Performance
              imageClickHandler={imageClickHandler}
              pageAlbum={pageAlbum}
              page={page}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
