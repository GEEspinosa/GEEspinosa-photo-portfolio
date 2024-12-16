import React, { useState } from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './components/common/header/header';
import Landing from './components/pages/landing';
import Portfolio from './components/pages/portfolio'
import About from './components/pages/about';
import ModalComponent from './components/common/modal/modal';

function App() {
  const [open, setOpen] = useState(false)
  const [modalSelect, setModalSelect] = useState(0)
  const [showModal, setShowModal] = useState(false)

  function imageClickHandler(id) {
    setModalSelect(id)
    setShowModal(true)
  }
  
  window.addEventListener("resize", () => {
      if(window.innerWidth > 710) {setOpen(false)}
    }
  )

  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
      setShowModal(false)
    }
  })
 
  return (
    <>  
        {showModal &&
          <ModalComponent 
          setShowModal={setShowModal}
          modalSelect={modalSelect}
          />
        }

        <Header 
          open = {open}
          setOpen = {setOpen}
          showModal ={showModal}
        />
        <Routes>
          <Route path="/" element={
            <Landing 
              imageClickHandler={imageClickHandler}
            />
            }
          />
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/about" element={<About />}/>
        </Routes>    
    </>
  );
}

export default App;
