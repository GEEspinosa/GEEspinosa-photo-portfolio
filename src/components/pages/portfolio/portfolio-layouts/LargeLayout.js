import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import imageData from '../../../../assets/image-data';
import { LeftArrowButton } from '../../../common/arrow-buttons/left-arrow-button/left-arrow-button';
import { RightArrowButton } from '../../../common/arrow-buttons/right-arrow-button/right-arrow-button';
import useWindowSize from '../../../../hooks/useWindowSize';

const PortfolioPage = styled.div`
  border: solid;
  display: grid;
  grid-template-columns: 16vw 1fr;

  // @media (max-width: 1779px) and (min-height: 1051px) {
  //   display: flex;
  //   flex-direction: column;
  // }
`;

const PortfolioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px;
`;

const SideNav = styled.div`
  // border: 1px solid red;
  display: flex;
  flex-direction: column;
  
  padding: 30px;

  // @media (max-width: 1779px) and (min-height: 1051px) {
  //   text-align: center;
  //   align-items: center;
  //   padding: 1vh;
  //   width: 100%;
  // }

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
    
   
  }

  .description-box {
    //border: solid black;
    color: grey;
    font-size: 20px;
    list-style-type: none;
    justify-content: center;
    position: absolute;
    top: 80vh;
    

    @media (max-height: 1050px) {
      font-size: 16px;
    }

    @media (max-width: 1260px) and (max-height: 1050px) {
      font-size: 16px;
      
    }

    @media (min-height: 1050px) {
      font-size: 14px;
    }

    @media (min-height: 1200px) {
      font-size: 16px;
    }
    @media (min-height: 1300px) {
      font-size: 18px;
    }

    h2 {
      font-size: 18px;
      color: grey;

      @media (min-height: 1050px) {
        font-size: 16px;
      }

      @media (min-height: 1200px) {
        font-size: 18px;
      }
      @media (min-height: 1300px) {
        font-size: 20px;
      }
    }
  }
`;

const Gallery = styled.div`
  display: flex;
  flex-direction: ${({ portfolioGalleryMidLayout }) =>
    portfolioGalleryMidLayout ? 'row' : 'column'};
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    flex-direction: row;  
    //border: solid black;
    margin: 10px;
  }

  li {
    margin: 0px 50px 0px 50px;
    color: grey;
    font-size: 22px;
    list-style-type: none;
    cursor: pointer;
  
    &:hover {
      color: red;
    }
  }

  
`;

const ImageBox = styled.div`
  //border: 1px solid red;
  width: ${({ portfolioGalleryMidLayout }) =>
    portfolioGalleryMidLayout ? '80vh' : '70vh'};
  height: ${({ portfolioGalleryMidLayout }) =>
    portfolioGalleryMidLayout ? '80vh' : '70vh'};
  padding: 5px;
  display: flex;

  justify-content: center;
  position: relative;

  @media (max-width: 1330px) and (min-height: 1051px) {
    // height: 58vh;
     width: 56vh;
  }

  @media (max-width: 1260px) and (max-height: 1050px) {
    width: 68vh;
    height: 68vh;
  }

  @media only screen and (max-width: 768px) and (max-height: 1024px) {
    width: 55vh;
    height: 55vh;
  }

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
  //border: solid;
  visibility: ${({ album }) => (album === 'cover' ? 'hidden' : 'visible')};
  display: flex;
  position: ${({ portfolioGalleryMidLayout }) =>
    portfolioGalleryMidLayout ? 'sticky' : ''};
  left: 88vw;
  flex-direction: ${({ portfolioGalleryMidLayout }) =>
    portfolioGalleryMidLayout ? 'column' : 'row'};
  justify-content: center;
  align-items: center;
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

    @media (max-width: 1779px) and (min-height: 1051px) {
      width: 13vh;
      height: 13vh;
    }
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
  margin-bottom: ${({ arrowInside, portfolioGalleryMidLayout }) =>
    !arrowInside && portfolioGalleryMidLayout ? '0px' : '190px'};
  //border-radius: 25%;
  background-color: ${({ orientationSelected, portfolioGalleryMidLayout }) =>
    orientationSelected === 'vertical' ? 'grey' : ''};

  //   &:hover {
  //     background-color: gainsboro;
  //   }

  &.outside-left-window-button {
    &:hover {
      background-color: ${({ leftWindowButtonAppear }) =>
        leftWindowButtonAppear ? 'gainsboro' : ''};
    }
  }

  &.outside-right-window-button {
    &:hover {
      background-color: ${({ rightWindowButtonAppear }) =>
        rightWindowButtonAppear ? 'gainsboro' : ''};
    }
  }

  &.left-arrow-portfolio {
    position: absolute;
    opacity: 0.6;
    top: 46.4%;
    //top: 36.4vh;
    left: 2%;
    &:hover {
      background-color: ${({ leftWindowButtonAppear }) =>
        leftWindowButtonAppear ? 'gainsboro' : ''};
    }
  }

  &.right-arrow-portfolio {
    position: absolute;
    opacity: 0.6;
    top: 46.4%;
    //top: 36.4vh;
    right: 2%;
    &:hover {
      background-color: ${({ rightWindowButtonAppear }) =>
        rightWindowButtonAppear ? 'gainsboro' : ''};
    }
  }

  &:hover {
    opacity: 1;
  }
`;

function LargeLayout({
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
  const [leftWindowButtonAppear, setLeftWindowButtonAppear] = useState(false);
  const [rightWindowButtonAppear, setRightWindowButtonAppear] = useState(false);
  const [leftScrollButtonsAppear, setLeftScrollButtonsAppear] = useState(false);
  const [rightScrollButtonsAppear, setRightScrollButtonsAppear] =
    useState(false);

  const [portfolioGalleryMidLayout, setPortfolioGalleryMidLayout] =
    useState(false);
  const [orientationArray, setOrientationArray] = useState('');
  const [orientationSelected, setOrientationSelected] = useState('');
  const [arrowInside, setArrowInside] = useState(false);
  const { width, height } = useWindowSize();
  const [galleryAmount, setGalleryAmount] = useState('lastGalleryIndex');

  useEffect(() => {
    if (height <= 1050) {
      setPortfolioGalleryMidLayout(true);
    } else {
      setPortfolioGalleryMidLayout(false);
    }
  }, [height]);

  useEffect(() => {
    if (width <= 1525 && portfolioGalleryMidLayout) {
      setArrowInside(true);
    } else if (width <= 1780) {
      setArrowInside(true);
    } else {
      setArrowInside(false);
    }
  }, [width]);

  useEffect(() => {
    if (width <= 1330) {
      setGalleryAmount(3)
    }
    if (height <= 865 ) {
      setGalleryAmount(3);
    }
    if (height <= 680 && portfolio.length >= 5) {
      setGalleryAmount(2);
    } else if (height > 865 && width >= 1330) {
      setGalleryAmount(4);
    }
    galleryIndexCalculator();
  }, [width, height]);

  function galleryIndexCalculator() {
    if (portfolio.length >= 5) {
      if (
        galleryIndexes.begGalleryIndex + galleryAmount >=
        portfolio.length - 1
      ) {
        setGalleryIndexes({
          begGalleryIndex: portfolio.length - 1 - galleryAmount,
          lastGalleryIndex: portfolio.length - 1,
        });
      } else {
        setGalleryIndexes({
          begGalleryIndex: galleryIndexes.begGalleryIndex,
          lastGalleryIndex: galleryIndexes.begGalleryIndex + galleryAmount,
        });
      }
    } else {
      if (
        galleryIndexes.begGalleryIndex + (galleryAmount - 1) >=
        portfolio.length - 1
      ) {
        setGalleryIndexes({
          begGalleryIndex: portfolio.length - 1 - (galleryAmount - 1),
          lastGalleryIndex: portfolio.length - 1,
        });
      } else {
        setGalleryIndexes({
          begGalleryIndex: galleryIndexes.begGalleryIndex,
          lastGalleryIndex:
            galleryIndexes.begGalleryIndex + (galleryAmount - 1),
        });
      }
    }
  }

  useEffect(() => {
    let p = [];
    let description = [];
    setOrientationArray('');
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
    setOrientationSelected(orientationArray[slide]);
    setSlide(0);
    setGalleryIndexes({
      begGalleryIndex: 0,
      lastGalleryIndex: galleryAmount,
    });
  }, [album]);

  useEffect(() => {
    if (album !== 'cover') {
      setSlideMessage(descriptionsArray[slide]);
    }
    leftSlideshowButtonHandler();
    rightSlideshowButtonHandler(portfolio);
    leftGalleryButtonHandler(galleryIndexes);
    rightGalleryButtonHandler(portfolio, galleryIndexes.lastGalleryIndex);
    setOrientationSelected(orientationArray[slide]);
  }, [slide, galleryIndexes, portfolio]);

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
    let { begGalleryIndex } = gallery;
    if (begGalleryIndex > 0) {
      setLeftScrollButtonsAppear(true);
    } else {
      setLeftScrollButtonsAppear(false);
    }
  }

  function rightGalleryButtonHandler(portfolio, lastGalleryIndex) {
    if (
      portfolio.length - 1 > galleryAmount &&
      lastGalleryIndex !== portfolio.length - 1
    ) {
      setRightScrollButtonsAppear(true);
    } else if (
      portfolio.length < 5 &&
      lastGalleryIndex !== portfolio.length - 1
    ) {
      setRightScrollButtonsAppear(true);
    } else {
      setRightScrollButtonsAppear(false);
    }
  }

  function galleryNavigateHandler(direction) {
    if (direction === 'left') {
      setGalleryIndexes(
        galleryIndexes.begGalleryIndex !== 0 &&
          portfolio.length >= galleryAmount
          ? {
              begGalleryIndex: galleryIndexes.begGalleryIndex - 1,
              lastGalleryIndex: galleryIndexes.lastGalleryIndex - 1,
            }
          : {
              begGalleryIndex: 0,
              lastGalleryIndex: galleryAmount,
            }
      );
    }

    if (direction === 'right') {
      setGalleryIndexes(
        galleryIndexes.lastGalleryIndex <= portfolio.length - 1 &&
          portfolio.length >= galleryAmount
          ? {
              begGalleryIndex: galleryIndexes.begGalleryIndex + 1,
              lastGalleryIndex: galleryIndexes.lastGalleryIndex + 1,
            }
          : {
              begGalleryIndex: portfolio.length - galleryAmount,
              lastGalleryIndex: portfolio.length,
            }
      );
    }
  }

  return (
    <PortfolioPage>
      
      { (
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
      )}

      <PortfolioContainer>

      
        {!arrowInside && (
          <NavButtons
            arrowInside={arrowInside}
            portfolioGalleryMidLayout={portfolioGalleryMidLayout}
            leftWindowButtonAppear={leftWindowButtonAppear}
            className="outside-left-window-button"
          >
            <LeftArrowButton
              leftButton={leftWindowButtonAppear}
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
                leftWindowButtonAppear={leftWindowButtonAppear}
              >
                <LeftArrowButton
                  leftButton={leftWindowButtonAppear}
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
                rightWindowButtonAppear={rightWindowButtonAppear}
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

          {!portfolioGalleryMidLayout && (
            <ScrollGallery
              album={album}
              leftButton={leftScrollButtonsAppear}
              rightButton={rightScrollButtonsAppear}
              portfolioGalleryMidLayout={portfolioGalleryMidLayout}
            >
              <button
                className="leftGalleryButton"
                onClick={() => galleryNavigateHandler('left')}
              >
                <div className="dots">. . .</div>
              </button>
              {portfolio
                .slice(
                  galleryIndexes.begGalleryIndex,
                  galleryIndexes.lastGalleryIndex + 1
                )
                .map((i, key) => {
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
                onClick={() => galleryNavigateHandler('right')}
              >
                <div className="dots">. . .</div>
              </button>
            </ScrollGallery>
          )}

          {/* {width < 1780 && !portfolioGalleryMidLayout && (
              <div className="description-box">
                <h2>{slideMessage.title}</h2>
                <p>
                  
                  {slideMessage.location}
                  <br />
                  {slideMessage.date}
                  <br />
                  {slideMessage.camera}
                  <br />
                  {slideMessage.film}
                  <br />
                  {slideMessage.shot}
                  <br />
                </p>
              </div>         
          )} */}
        </Gallery>
        {!arrowInside && (
          <NavButtons
            arrowInside={arrowInside}
            portfolioGalleryMidLayout={portfolioGalleryMidLayout}
            className="outside-right-window-button"
            rightWindowButtonAppear={rightWindowButtonAppear}
          >
            <RightArrowButton
              rightButton={rightWindowButtonAppear}
              arrowButtonHandler={arrowButtonHandler}
            />
          </NavButtons>
        )}

        {portfolioGalleryMidLayout && (
          <ScrollGallery
            album={album}
            leftButton={leftScrollButtonsAppear}
            rightButton={rightScrollButtonsAppear}
            portfolioGalleryMidLayout={portfolioGalleryMidLayout}
          >
            <button
              className="leftGalleryButton"
              onClick={() => galleryNavigateHandler('left')}
            >
              <div className="dots">. . .</div>
            </button>
            {portfolio
              .slice(
                galleryIndexes.begGalleryIndex,
                galleryIndexes.lastGalleryIndex + 1
              )
              .map((i, key) => {
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
              onClick={() => galleryNavigateHandler('right')}
            >
              <div className="dots">. . .</div>
            </button>
          </ScrollGallery>
        )}
      </PortfolioContainer>
    </PortfolioPage>
  );
}

export default LargeLayout;
