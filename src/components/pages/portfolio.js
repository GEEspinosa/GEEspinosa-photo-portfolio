import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import imageData from '../../assets/image-data';
import { LeftArrowButton } from '../common/arrow-buttons/left-arrow-button/left-arrow-button';
import { RightArrowButton } from '../common/arrow-buttons/right-arrow-button/right-arrow-button';
import useWindowSize from '../../hooks/useWindowSize';

const PortfolioPage = styled.div`
  display: grid;
  
  grid-template-columns: 350px 1fr;
  // height: calc(100vh - 100px);

  @media (max-height: 1050px) {
    grid-template-columns: 270px 1fr;
  }
    
`;

const PortfolioContainer = styled.div`
  //border: solid green;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SideNav = styled.div`
  display: flex;
  flex-direction: column;
  //gap: 54.5%;

  padding: 30px;
  border: 1px solid red;

  ul {
    padding: 0px;
    line-height: 3rem;
  }

  li {
    color: grey;
    font-size: 22px;
    list-style-type: none;
    cursor: pointer;

    &:hover {
      color: red;
    }

    @media (max-height: 1050px) {
      font-size: 18px;
      line-height: 2rem;
    }

    @media (max-height: 800px) {
      font-size: 18px;
      line-height: 2rem;
    }
  }

  .description-box {
   // border: solid grey;
    padding: 25px;
    color: grey;
    font-size: 20px;
    list-style-type: none;
    text-align: left;

    @media (max-height: 1050px) {
      font-size: 16px;
    }

    @media (max-height: 800px) {
      font-size: 16px;
    }

    h2 {
      font-size: 22px;
      color: grey;

      @media (max-height: 800px) {
        font-size: 18px;
      }
    }
  }
`;


const Gallery = styled.div`
 //border: solid silver;
  display: flex;
  flex-direction: ${({ portfolioGalleryMidLayout }) =>
    portfolioGalleryMidLayout ? 'row' : 'column'};
  padding: 25px;
  justify-content: center;
  align-items: center;
  position: ${({ portfolioGalleryMidLayout }) =>
    portfolioGalleryMidLayout ? 'relative' : ''};
`;

const ImageBox = styled.div`
  //border: 1px solid red;
  width: ${({ portfolioGalleryMidLayout }) =>
    portfolioGalleryMidLayout ? '81vh' : '70vh'};
  height: ${({ portfolioGalleryMidLayout }) =>
    portfolioGalleryMidLayout ? '81vh' : '70vh'};
  padding: 5px;
  display: flex;
  
  justify-content: center;
  align-item: center;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  h2 {
    visibility: ${({ album }) => (album === 'cover' ? 'visible' : 'hidden')};
    position: absolute;
    color: white;
    top: 47.5%;
  }
`;

const ScrollGallery = styled.div`
  visibility: ${({ album }) => (album === 'cover' ? 'hidden' : 'visible')};
  display: flex;
  position: ${({ portfolioGalleryMidLayout }) =>
    portfolioGalleryMidLayout ? "sticky" : '' };
  left: 88vw;
  flex-direction: ${({ portfolioGalleryMidLayout }) =>
    portfolioGalleryMidLayout ? 'column' : 'row'};
  justify-content: center;
  align-items: center;
  overflow-x: auto;
  white-space: nowrap;
  width: ${({ portfolioGalleryMidLayout }) =>
    portfolioGalleryMidLayout ? '' : '100%'};
  padding: 5px;
  margin: ${({ portfolioGalleryMidLayout }) =>
    portfolioGalleryMidLayout ? '0vw 1vw 0vw 3vw' : ''};

  .scrollGalleryBorders {
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({ portfolioGalleryMidLayout }) =>
      portfolioGalleryMidLayout ? '13.3vh' : '15vh'};

    height: ${({ portfolioGalleryMidLayout }) =>
      portfolioGalleryMidLayout ? '13.3vh' : '15vh'};
    margin: 5px;
    cursor: pointer;
    border: solid gainsboro;
  }

  img {
    padding: 4px;
    width: 100%;
    height: 100%;
    margin: 5px;
    flex-grow: 1;
    object-fit: contain;
  }

  .leftGalleryButton {
    visibility: ${({ leftButton }) =>
      leftButton === true ? 'visible' : 'hidden'};
    border: none;
    color: grey;
    border-radius: 50%;
    width: ${({ portfolioGalleryMidLayout }) =>
      portfolioGalleryMidLayout ? '50px' : '75px'};
    height: ${({ portfolioGalleryMidLayout }) =>
      portfolioGalleryMidLayout ? '50px' : '75px'};
    align-items: center;
    margin-right: ${({ portfolioGalleryMidLayout }) =>
      portfolioGalleryMidLayout ? '' : '10px'};
    text-align: center;
    font-size: 1em;
    font-weight: 600;
    background-color: white;

    &:hover {
      color: white;
      background-color: gainsboro;
    }

    .dots {
      line-height: 0;
      margin-top: -4px;
    }
  }

  .rightGalleryButton {
    visibility: ${({ rightButton }) =>
      rightButton === true ? 'visible' : 'hidden'};
    border: none;
    color: grey;
    border-radius: 50%;
    width: ${({ portfolioGalleryMidLayout }) =>
      portfolioGalleryMidLayout ? '50px' : '75px'};
    height: ${({ portfolioGalleryMidLayout }) =>
      portfolioGalleryMidLayout ? '50px' : '75px'};
    margin-left: ${({ portfolioGalleryMidLayout }) =>
      portfolioGalleryMidLayout ? '' : '10px'};
    text-align: center;
    font-size: 1em;
    font-weight: 600;
    background-color: white;

    &:hover {
      color: white;
      background-color: gainsboro;
    }
    .dots {
      line-height: 0;
      margin-top: -4px;
    }
  }
`;

const NavButtons = styled.div`
  margin-bottom: ${({arrowInside, portfolioGalleryMidLayout}) => (!arrowInside && portfolioGalleryMidLayout) ? '0px' : '190px'};
  //border-radius: 25%;
  background-color: ${({orientationSelected, portfolioGalleryMidLayout}) => (orientationSelected === 'vertical')  ? 'grey' : ''};

  &.left-arrow-portfolio {
    position: absolute;
    opacity: 0.6;
    top: 46.4%;
    left: 2%;
  }

  &.right-arrow-portfolio {
    position: absolute;
    opacity: 0.6;
    top: 46.4%;
    right: 2%;
  }

  &:hover {
    opacity: 1;
  }
`;

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
  const [galleryIndexes, setGalleryIndexes] = useState({});
  const [galleryArray, setGalleryArray] = useState([]);
  const [leftWindowButtonAppear, setLeftWindowButtonAppear] = useState(false);
  const [rightWindowButtonAppear, setRightWindowButtonAppear] = useState(false);
  const [leftScrollButtonsAppear, setLeftScrollButtonsAppear] = useState(false);
  const [rightScrollButtonsAppear, setRightScrollButtonsAppear] =
    useState(false);

  const [portfolioGalleryMidLayout, setPortfolioGalleryMidLayout] =
    useState(false);
  const [orientationArray, setOrientationArray] = useState('')
  const [orientationSelected, setOrientationSelected] = useState('')
  const [arrowInside, setArrowInside] = useState (false)

  const {width, height} = useWindowSize()

  useEffect(() => {
      if (width <= 1050 || height <= 1050) {
        setPortfolioGalleryMidLayout(true);
      } 
      else {
        setPortfolioGalleryMidLayout(false);
      }
}, [width, height]);

  useEffect(() => {
      if (width <= 1525 ) {
        setArrowInside(true);
      } 
      else {
        setArrowInside(false);
      }
  }, [width]);

  useEffect(() => {
    let p = [];
    let description = [];
    setOrientationArray('')
    let orientation = [];
    imageData.map(entry => {
      
      if ('album' in entry) {
        if (album in entry.album) {
          p.push(entry.image);
          orientation.push(entry.orientation);
          description.push(entry.description);    
        }
      }
    });
    setPortfolio(p);
    setDescriptionsArray(description);
    setOrientationArray(orientation);
    setOrientationSelected(orientationArray[slide])
    setSlide(0);
    createSlidingGallery(p);
    setGalleryIndexes({
      begGalleryIndex: 0,
      lastGalleryIndex: 5,
    });
  }, [album]);

  useEffect(() => {
    createSlidingGallery(portfolio);
    if (album !== 'cover') {
      setSlideMessage(descriptionsArray[slide]);
    }
    leftSlideshowButtonHandler();
    rightSlideshowButtonHandler(portfolio);
    leftGalleryButtonHandler(galleryIndexes);
    rightGalleryButtonHandler(portfolio, galleryIndexes.lastGalleryIndex);
    setOrientationSelected(orientationArray[slide])
    
  }, [slide, galleryIndexes, portfolio]);

  function createSlidingGallery(p) {
    let slidingGalleryFilter = p.filter(
      (i, key) =>
        key >= galleryIndexes.begGalleryIndex &&
        key < galleryIndexes.lastGalleryIndex
    );
    setGalleryArray(slidingGalleryFilter);
  }

  function leftSlideshowButtonHandler() {
    if (slide > 0) {
      setLeftWindowButtonAppear(true);
    } else {
      setLeftWindowButtonAppear(false);
    }
  }

  function rightSlideshowButtonHandler() {
    if (slide < portfolio.length - 1) {
      setRightWindowButtonAppear(true);
    } else {
      setRightWindowButtonAppear(false);
    }
  }

  function leftGalleryButtonHandler(gallery) {
    let { lastGalleryIndex } = gallery;
    if (lastGalleryIndex >= 6) {
      setLeftScrollButtonsAppear(true);
    } else {
      setLeftScrollButtonsAppear(false);
    }
  }

  function rightGalleryButtonHandler(portfolio, lastGalleryIndex) {
    if (portfolio.length > 5 && lastGalleryIndex !== portfolio.length) {
      setRightScrollButtonsAppear(true);
    } else {
      setRightScrollButtonsAppear(false);
    }
  }

  

  return (
    <PortfolioPage>
      <SideNav>
        <ul>
          <li onClick={() => setAlbum('longbeach')}>Autumn Longbeach, WA</li>
          <li onClick={() => setAlbum('test1')}>Tessa</li>
          <li onClick={() => setAlbum('test2')}>Live Performances</li>
          <li onClick={() => setAlbum('test3')}>Test3</li>
        </ul>

        <div className="description-box">
          <h2>{slideMessage.title}</h2>
          <p>
            <br />
            {slideMessage.location}
            <br />
            {slideMessage.date}
            <br />
            <br />
            {slideMessage.camera}
            <br />
            {slideMessage.film}
            <br />
            {slideMessage.shot}
            <br />
          </p>
        </div>
      </SideNav>

      <PortfolioContainer>
        {!arrowInside && (
          <NavButtons
            arrowInside={arrowInside}
            portfolioGalleryMidLayout={portfolioGalleryMidLayout}
          >
            <LeftArrowButton
              leftButton={leftWindowButtonAppear}
              className="test"
              arrowButtonHandler={arrowButtonHandler}
            />
          </NavButtons>
        )}
        <Gallery portfolioGalleryMidLayout={portfolioGalleryMidLayout}>
          <ImageBox
            album={album}
            portfolioGalleryMidLayout={portfolioGalleryMidLayout}
          >
            {arrowInside && leftWindowButtonAppear && (
              <NavButtons
                className="left-arrow-portfolio"
                portfolioGalleryMidLayout={portfolioGalleryMidLayout}
                orientationSelected={orientationSelected}
              >
                <LeftArrowButton
                  leftButton={leftWindowButtonAppear}
                  className="test"
                  arrowButtonHandler={arrowButtonHandler}
                  portfolioGalleryMidLayout={portfolioGalleryMidLayout}
                  orientationSelected={orientationSelected}
                />
              </NavButtons>
            )}

            <img alt="test" src={portfolio[slide]} />
            <h2>{slideMessage.title}</h2>

            {arrowInside && rightWindowButtonAppear && (
              <NavButtons
              orientationSelected={orientationSelected}
              portfolioGalleryMidLayout={portfolioGalleryMidLayout}
                className="right-arrow-portfolio"
              >
                <RightArrowButton
                  rightButton={rightWindowButtonAppear}
                  arrowButtonHandler={arrowButtonHandler}
                  portfolioGalleryMidLayout={portfolioGalleryMidLayout}
                  orientationSelected={orientationSelected}
                />
              </NavButtons>
            )}
          </ImageBox>

         { !portfolioGalleryMidLayout && <ScrollGallery
            album={album}
            leftButton={leftScrollButtonsAppear}
            rightButton={rightScrollButtonsAppear}
            portfolioGalleryMidLayout={portfolioGalleryMidLayout}
          >
            <button
              className="leftGalleryButton"
              // onClick={() =>
              //   setGalleryIndexes(
              //     galleryIndexes.begGalleryIndex !== 0 && portfolio.length >= 5
              //       ? {
              //           begGalleryIndex: galleryIndexes.begGalleryIndex - 1,
              //           lastGalleryIndex: galleryIndexes.lastGalleryIndex - 1,
              //         }
              //       : {
              //           begGalleryIndex: 0,
              //           lastGalleryIndex: 5,
              //         }
              //   )
              // }
            >
              <div className="dots">. . .</div>
            </button>
            {galleryArray.map((i, key) => {
              let adjust = key + galleryIndexes.begGalleryIndex;

              return (
                <div
                  className="scrollGalleryBorders"
                  onClick={() => setSlide(adjust)}
                >
                  <img alt="test" src={i} />
                </div>
              );
            })}

            <button
              className="rightGalleryButton"
              // onClick={() =>
              //   setGalleryIndexes(
              //     galleryIndexes.lastGalleryIndex !== portfolio.length &&
              //       portfolio.length >= 5
              //       ? {
              //           begGalleryIndex: galleryIndexes.begGalleryIndex + 1,
              //           lastGalleryIndex: galleryIndexes.lastGalleryIndex + 1,
              //         }
              //       : {
              //           begGalleryIndex: portfolio.length - 5,
              //           lastGalleryIndex: portfolio.length,
              //         }
              //   )
              // }
            >
              <div className="dots">. . .</div>
            </button>
          </ScrollGallery>}
        </Gallery>
        {!arrowInside && (
          <NavButtons
          arrowInside={arrowInside}
            portfolioGalleryMidLayout={portfolioGalleryMidLayout}
          >
            <RightArrowButton
              rightButton={rightWindowButtonAppear}
              arrowButtonHandler={arrowButtonHandler}
            />
          </NavButtons>
        )}


{portfolioGalleryMidLayout && <ScrollGallery
            album={album}
            leftButton={leftScrollButtonsAppear}
            rightButton={rightScrollButtonsAppear}
            portfolioGalleryMidLayout={portfolioGalleryMidLayout}
          >
            <button
              className="leftGalleryButton"
              // onClick={() =>
              //   setGalleryIndexes(
              //     galleryIndexes.begGalleryIndex !== 0 && portfolio.length >= 5
              //       ? {
              //           begGalleryIndex: galleryIndexes.begGalleryIndex - 1,
              //           lastGalleryIndex: galleryIndexes.lastGalleryIndex - 1,
              //         }
              //       : {
              //           begGalleryIndex: 0,
              //           lastGalleryIndex: 5,
              //         }
              //   )
              // }
            >
              <div className="dots">. . .</div>
            </button>
            {galleryArray.map((i, key) => {
              let adjust = key + galleryIndexes.begGalleryIndex;

              return (
                <div
                  className="scrollGalleryBorders"
                  onClick={() => setSlide(adjust)}
                >
                  <img alt="test" src={i} />
                </div>
              );
            })}

            <button
              className="rightGalleryButton"
              // onClick={() =>
              //   setGalleryIndexes(
              //     galleryIndexes.lastGalleryIndex !== portfolio.length &&
              //       portfolio.length >= 5
              //       ? {
              //           begGalleryIndex: galleryIndexes.begGalleryIndex + 1,
              //           lastGalleryIndex: galleryIndexes.lastGalleryIndex + 1,
              //         }
              //       : {
              //           begGalleryIndex: portfolio.length - 5,
              //           lastGalleryIndex: portfolio.length,
              //         }
              //   )
              // }
            >
              <div className="dots">. . .</div>
            </button>
          </ScrollGallery>}
      </PortfolioContainer>
 

      
    </PortfolioPage>
  );
}

export default Portfolio;
