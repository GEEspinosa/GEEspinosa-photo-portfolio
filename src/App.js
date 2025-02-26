import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/common/header/header';


//dev note: page component imports
import Landing from './components/pages/landing/landing';
import Location from './components/pages/location/location';
import People from './components/pages/people/people';
import StillLife from './components/pages/still-life/still-life';
import Performance from './components/pages/performance/performance';
// import Portfolio from './components/pages/portfolio/portfolio';
import About from './components/pages/about/about';


import ModalComponent from './components/common/modal/modal';
import imageData from './assets/image-data';
import useWindowSize from './hooks/useWindowSize';


function App() {
  const [open, setOpen] = useState(false);
  const [pageAlbum, setPageAlbum] = useState({
    landing: [],
    location: [],
    people: [],
    stillLife: [],
    performance: [],
    
  })
  const [page, setPage] = useState('landing')
  const [modalSelect, setModalSelect] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [fadeIn, setFadeIn] = useState(false)
  const [portfolio, setPortfolio] = useState([]);
  const [slide, setSlide] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false)

  const { width } = useWindowSize();
  let album = pageAlbum[page][0] || [];

  function imageClickHandler(id) {
    setModalSelect(id);
    setShowModal(true);
  }

  useEffect(() => {
    if (width > 710) {
      setOpen(false);
    }
  }, [width]);

  function fadeHandler () {
    setFadeIn(!fadeIn)
    
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
      if (right < album.length - 1) {
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
        setModalSelect(album.length - 1);
      }
    }
    if (direction === 'Right' && showModal) {
      let right = modalSelect + 1;
      if (right < album.length - 1) {
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
    fadeHandler()
  };

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);
    return () => document.removeEventListener('keydown', keyDownHandler);
  });


  // useEffect(() => {
  //   let p = [];
  //   imageData.map(entry => {
  //     if ('album' in entry) {
  //       if (page in entry.album) {
  //         p.push(entry.image);
  //       }
  //     }
  //   });
  //   setPortfolio(p);
  // }, [page])

  let id = 0;

function addId() {
  return id++;
}
  useEffect(() => {
    const filteredImages = imageData.filter(img => page in img.album)
    filteredImages.map((img, key) => img.id = key)
    setPageAlbum({...pageAlbum, [page]: [filteredImages]})
    setIsLoaded(true)
    
    
  }, [page])



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
          fadeHandler={fadeHandler}
          pageAlbum={pageAlbum}
          page={page}
        />
      )}

      <Header open={open} setOpen={setOpen} showModal={showModal} setPage={setPage}/>
      <Routes>
        {isLoaded && <Route
          path="/"
          element={
            <Landing 
              imageClickHandler={imageClickHandler} 
              pageAlbum={pageAlbum}
              page={page}
            />
          }
        />}
        <Route
          path="/location"
          element={<Location imageClickHandler={imageClickHandler} pageAlbum={pageAlbum}
          page={page} />}
        />
        <Route
          path="/people"
          element={<People imageClickHandler={imageClickHandler} pageAlbum={pageAlbum}
          page={page}/>}
        />
        <Route
          path="/still-life"
          element={<StillLife imageClickHandler={imageClickHandler} pageAlbum={pageAlbum}
          page={page}/>}
        />
        <Route
          path="/performance"
          element={<Performance imageClickHandler={imageClickHandler} pageAlbum={pageAlbum}
          page={page} />}
        />


        {/* dev note: complex route  */}
        {/* <Route
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
        /> */}
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
