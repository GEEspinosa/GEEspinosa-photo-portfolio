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

  // dev note: destructuring `width` from custom hook `useWindowSize` to get current window width.
  const { width } = useWindowSize();

  let album = pageAlbum[page][0] || [];

  // dev note: click handler that sets the clicked image's id to state
  // and triggers modal mode, bypassing gallery view to display the image in modal.
  function imageClickHandler(id) {
    setModalSelect(id);
    setShowModal(true);
  }

  // dev note: toggles `fadeIn` state to assist with the fade effect logic
  // when scrolling in modal viewing mode (triggering CSS transitions).
  function fadeHandler() {
    setFadeIn(!fadeIn);
  }

  // dev note: click handler to set the page and scroll to the top
  function navClickHander(link) {
    setPage(link);
    scrollToTop();
  }

  // dev note: event handler for keyboard commands to control modal (escape to close, arrow keys to navigate)
  function keyDownHandler(e) {
    if (e.key === 'Escape') {
      setShowModal(false); // Close modal on Escape
    }
    if (e.key === 'ArrowLeft' && showModal) {
      let left = modalSelect - 1;
      if (left >= 0) {
        setModalSelect(left);
      } else {
        setModalSelect(album.length - 1); // Loop to last image if at the start
      }
    }
    if (e.key === 'ArrowRight' && showModal) {
      let right = modalSelect + 1;
      if (right < album.length) {
        setModalSelect(right);
      } else {
        setModalSelect(0); // Loop to first image if at the end
      }
    }
    fadeHandler();
  }

  // dev note: click handler for navigating left/right in modal view
  const arrowButtonHandler = direction => {
    if (direction === 'Left' && showModal) {
      let left = modalSelect - 1;
      if (left >= 0) {
        setModalSelect(left);
      } else {
        setModalSelect(album.length - 1); // Loop to last image if at the start
      }
    }
    if (direction === 'Right' && showModal) {
      let right = modalSelect + 1;
      if (right < album.length) {
        setModalSelect(right);
      } else {
        setModalSelect(0); // Loop to first image if at the end
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

 // dev note: useEffect sets up keydown event listener when the app mounts,
 // calling `keyDownHandler` on key press. Removes listener when app unmounts.
  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);
    return () => document.removeEventListener('keydown', keyDownHandler);
  });

  //dev note: first render always navigates to the landing page
  useEffect(() => {
    navigate('/');
  }, []);


// dev note: useEffect runs when `page` state changes.
//
// first thing it does is check if `pageAlbum[page]` already has images.
// if the array isn't empty, we skip the rest — no need to reprocess.
//
// otherwise:
// - filter `imageData` to grab any image that includes the current page in its album.
// - sort those images in increasing order based on album[page] value.
// - reassign new ids to each image based on its index in the sorted array.
// - update `pageAlbum` by spreading the current state and assigning the new filtered list
//   to the page key — wrapped in an extra array (so it's [filteredImages], not just filteredImages).
//
// finally, set `isLoaded` to true — only relevant for the landing page on first load,
// after that it stays true and isn’t used again.
//
// what’s nice here is the early return: if that page’s images are already cached in state,
// we skip all the sorting and mapping work. just reuse what’s already stored.
// simple and efficient.

  useEffect(() => {
    if (pageAlbum[page].length > 0) return
    const filteredImages = imageData.filter(img => page in img.album);
    filteredImages.sort((a, b) => (a.album[page] < b.album[page] ? -1 : 0));
    filteredImages.map((img, key) => (img.id = key));
    setPageAlbum({ ...pageAlbum, [page]: [filteredImages] });
    setIsLoaded(true);
  }, [page, pageAlbum]);

 // dev note: if slide-out menu is open, scrolling is disabled.
 // when it's closed, scroll setting reverts back to normal.
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
