import React, { useState, useEffect } from 'react';
import useWindowSize from '../../../hooks/useWindowSize';
import LargeLayout from './portfolio-layouts/LargeLayout';
import MediumLayout from './portfolio-layouts/mediumLayout';

function Portfolio({
  album,
  setAlbum,
  portfolio,
  setPortfolio,
  slide,
  setSlide,
  arrowButtonHandler,
  descriptionsArray,
  setDescriptionsArray,
  slideMessage,
  setSlideMessage,
}) {
  const { width } = useWindowSize();
  const [portfolioLayout, setPortfolioLayout] = useState('');

  useEffect(() => {
    if (width >= 1400) {
      setPortfolioLayout('2xl');
    } else if (width >= 1200) {
      setPortfolioLayout('xl');
    } else if (width >= 1095) {
      setPortfolioLayout('large');
    } else if (width >= 768) {
      setPortfolioLayout('medium');
      console.log('medium')
    } else if (width >= 576) {
      setPortfolioLayout('small');
    } else if (width < 576) {
      setPortfolioLayout('xs');
    }
    
  }, [width]);

  return (
    <>
      {(portfolioLayout === '2xl' ||
        portfolioLayout === 'xl' ||
        portfolioLayout === 'large') && (
        <LargeLayout
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
      )}
      {portfolioLayout === 'medium' && (
        <MediumLayout
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
      )}
      {portfolioLayout === 'small' && <h1>small</h1>}
      {portfolioLayout === 'xs' && <h1>xs</h1>}
    </>
  );
}

export default Portfolio;