import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

//dev note: importing head which floats in all gallery viewing modes no matter the page unless
//resized where a hamburger menu replaces it
import Header from './components/common/header/header';

//dev note: importing modal component that bypasses gallery viewing mode and nav bar
import ModalComponent from './components/common/modal/modal';

//dev note: page component imports
import Landing from './components/pages/landing/landing';
import Location from './components/pages/location/location';
import People from './components/pages/people/people';
import Impression from './components/pages/impression/impression';
import Performance from './components/pages/performance/performance';
import About from './components/pages/about/about';

//dev note: all the image objects imports
import imageData from './assets/image-data';

//dev note: custom hook that stores width and height of browser
import useWindowSize from './hooks/useWindowSize';

//dev note: util function that scrolls to the top of screen
import { scrollToTop } from './utils/utils';

function App() {
  const [open, setOpen] = useState(false);
  const [pageAlbum, setPageAlbum] = useState({
    landing: [],
    location: [],
    people: [],
    impression: [],
    performance: [],
  });
  const [page, setPage] = useState('landing');
  const [modalSelect, setModalSelect] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  //dev note: destructuring from custom hook
  const { width } = useWindowSize();

  let album = pageAlbum[page][0] || [];

  //dev note: click handler that sets mouse clicked image's id in gallery viewing mode to state and makes showModal true,
  //thereby bypassing gallery viewing mode and setting the image to be displayed in modal mode.
  function imageClickHandler(id) {
    setModalSelect(id);
    setShowModal(true);
  }

  //dev note: this is used to assist fade effect logic when scrolling in modal viewing mode
  function fadeHandler() {
    setFadeIn(!fadeIn);
  }

  //dev note: click handler that sets page and scrolls to the top
  function navClickHander(link) {
    setPage(link);
    scrollToTop();
  }

  //dev note: event handler for keyboard commands to control scrolling and exiting modal viewing mode
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
    fadeHandler();
  }

  //dev note: click handler for left/right buttons in modal viewing mode
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

  //dev note: forces an open slide menu to close if browser window is wide enough for a nav bar.
  useEffect(() => {
    if (width > 1185) {
      setOpen(false);
    }
  }, [width]);

  //dev note: useEffect hook that creates event listeners for keyboard commands when App mounts,
  //calling KeyDown event handler function
  //and then when App unmounts, it removes the event listeners using cleanup function
  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);
    return () => document.removeEventListener('keydown', keyDownHandler);
  });

  //dev note: first render always starts on landing page
  useEffect(() => {
    navigate('/');
  }, []);


  // dev note: useEffect that triggers when page state changes.
  // filteredImages store any image that has the album object 
  // containing a key that matches what's stored in state.
  // then it sorts the filtered images in increasing order
  // then it reassign a new id to the images equal to it's index in the array.
  // then updates pageAlbum, spreading it's current state 
  // while adjusting variable key page to the filtered array
  // finally indicates that the page is loaded. 
  // isLoaded indicates to render landing page route on first render given PageAlbum has state,
  // after it stays true.

  useEffect(() => {
    const filteredImages = imageData.filter(img => page in img.album);
    filteredImages.sort((a, b) => (a.album[page] < b.album[page] ? -1 : 0));
    filteredImages.map((img, key) => (img.id = key));
    setPageAlbum({ ...pageAlbum, [page]: [filteredImages] });
    setIsLoaded(true);
  }, [page]);

  //dev note: if slide out menu is open, scrolling is disabiled allowing setting to revert when closed.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'scroll';
      };
    }
  }, [open]);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {showModal && (
          <ModalComponent
            showModal={showModal}
            setShowModal={setShowModal}
            modalSelect={modalSelect}
            arrowButtonHandler={arrowButtonHandler}
            fadeIn={fadeIn}
            setFadeIn={setFadeIn}
            pageAlbum={pageAlbum}
            page={page}
          />
        )}
        <Header
          open={open}
          setOpen={setOpen}
          showModal={showModal}
          setPage={setPage}
          navClickHander={navClickHander}
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
            path="/impression"
            element={
              <Impression
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
    </>
  );
}

export default App;
