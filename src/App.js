import React, { Fragment } from 'react';
import {Routes, Route} from 'react-router-dom';
import './styles/App.css';
import Header from './components/common/header';
import Landing from './components/pages/landing';
import Portfolio from './components/pages/portfolio'






function About() {
  return (
    <h1>About</h1>
  )
}


function App() {
  return (
    <>  
        <Header />
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/portfolio" element={<Portfolio />}/>
          <Route path="/about" element={<About />}/>
        </Routes>    
    </>
  );
}

export default App;
