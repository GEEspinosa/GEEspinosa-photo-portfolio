import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/common/header/header";
import Landing from "./components/pages/landing/landing";
import Portfolio from "./components/pages/portfolio";
import About from "./components/pages/about";
import ModalComponent from "./components/common/modal/modal";
import imageData from "./assets/image-data";

function App() {
  const [open, setOpen] = useState(false);
  const [modalSelect, setModalSelect] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [smallLandingLayout, setSmallLandingLayout] = useState(false);

  function imageClickHandler(id) {
    setModalSelect(id);
    setShowModal(true);
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth > 710) {
      setOpen(false);
    }
  });

  function keyDownHandler(e) {
    if (e.key === "Escape") {
      setShowModal(false);
    }
    if (e.key === "ArrowLeft" && showModal) {
      let left = modalSelect - 1;
      if (left >= 0) {
        setModalSelect(left);
      } else {
        setModalSelect(0);
      }
    }
    if (e.key === "ArrowRight" && showModal) {
      let right = modalSelect + 1;
      if (right < imageData.length - 1) {
        setModalSelect(right);
      } else {
        setModalSelect(imageData.length - 1);
      }
    }
  }

  //dev note: because of react re-renders,
  //eventlisteners must be added and removed with useEffect hook!!!
  //the eventlistener calls the above declared keyDownHandler

  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler);
    return () => document.removeEventListener("keydown", keyDownHandler);
  });

  useEffect(() => {
    if (window.innerWidth <= 802) {
      setSmallLandingLayout(true);
    } else {
      setSmallLandingLayout(false);
    }
  }, []);

  return (
    <>
      {showModal && (
        <ModalComponent setShowModal={setShowModal} modalSelect={modalSelect} />
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
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
