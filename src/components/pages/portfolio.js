import React, {useState, useEffect} from "react";
import styled from "styled-components";
import imageData from "../../assets/image-data";
import {LeftArrowButton} from '../common/arrow-buttons/left-arrow-button/left-arrow-button';
import { RightArrowButton } from "../common/arrow-buttons/right-arrow-button/right-arrow-button";

const PortfolioContainer = styled.div`
 // border: solid;
  display: flex;
  width: 100%;
  height: 100%;
`;

const SideNav = styled.div`
  padding: 40px 0px;
  width: 30vh;
  min-width: 30vh;
  
  :hover {
      color: red;
  }
    
  li {
    color: grey;
    font-size: 22px;
    list-style-type: none;
    padding: 6px;
    margin: 10px;  
    cursor: pointer;
  }

`;

const Gallery = styled.div`
 // background-color: gainsboro;
  //display: flex;
  flex-direction: row;
  //position: relative;
  width: 100vw;
  height: 80vh;
  padding: 25px;
  object-fit: contain;
`;

const ImageBox = styled.div`
 
  //border: solid;
  position: relative;
  width: 100%;
  height: 80%;
  padding: 5px;
  
  img {
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    max-width: 100%;
    max-height: 100%;
  }
`;  

const ScrollGallery = styled.div`
  //border: solid;
  display: flex;
  justify-content: center;
  align-items; stretch;
  overflow-x: auto;
  white-space: nowrap;
  width: 100%; 
  padding: 5px;
  
  .scrollGalleryBorders {
    display: flex;
    //background-color: #28282B;
    justify-content: center;
    width: 15vh;
    height: 15vh;
   // border: solid;
    margin: 5px;
    cursor: pointer;
  }

  img {  
    max-width: 95%;
    min-height: 30%;
    margin: 5px;
    flex-grow: 1;
    object-fit: contain;  
  }

  .leftGalleryButton {
    
    visibility: ${({leftButton}) => leftButton === true ? 'visible' : 'hidden'};
    
    border: none;
    background-color: white;
    color: silver;
    border-radius: 50%;
    width: 75px;
    height: 75px;
    margin-top: 65px;
    margin-right: 10px;
    margin-left: 10px;
    text-align: center;
    font-size: 1em;
    font-weight: 600;

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
    
    visibility: ${({rightButton}) => rightButton === true ? 'visible' : 'hidden'};
    
    border: none;
    background-color: white;
    color: silver;
    border-radius: 50%;
    width: 75px;
    height: 75px;
    margin-top: 65px;
    margin-right: 10px;
    margin-left: 10px;
    text-align: center;
    font-size: 1em;
    font-weight: 600;

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
  cursor: pointer;
  margin: auto;
  bottom: 40%;

  :hover {
    background-color: gainsboro;
  }
`;

function Portfolio({
  album, 
  setAlbum, 
  portfolio, 
  setPortfolio, 
  slide, 
  setSlide, 
  arrowButtonHandler
}) {
  
  const [windowIndexes, setWindowIndexes] = useState({})
  const [galleryIndexes, setGalleryIndexes] = useState ({})
  const [windowArray, setWindowArray] = useState([])
  const [galleryArray, setGalleryArray] = useState([])
  const [leftScrollButtonsAppear, setLeftScrollButtonsAppear] = useState(false)
  const [rightScrollButtonsAppear, setRightScrollButtonsAppear] = useState(false)
  
  useEffect (() => {
    let p = [];
      imageData.map((entry) => {
        if ('album' in entry ) {
          if (album in entry.album) {
            p.push(entry.image)
          }
        } 
      });
      setPortfolio(p)
      setSlide(0) 
      testSliding(p)
      setWindowIndexes({
        begIndex: 0,
        lastIndex: 5,
      })
      setGalleryIndexes({
        begGalleryIndex: 0,
        lastGalleryIndex: 5,
      })
      
  }, [album])

  useEffect(() => {
    testSliding(portfolio)
    leftGalleryButtonHandler(galleryIndexes)
    rightGalleryButtonHandler(portfolio, galleryIndexes.lastGalleryIndex)
  }, [ galleryIndexes])

  function testSliding (p) {
    let slidingWindow = p.filter((i, key) => (key >= windowIndexes.begIndex ) && (key < windowIndexes.lastIndex))
    setWindowArray(slidingWindow)
    let slidingGallery = p.filter((i, key) => (key >= galleryIndexes.begGalleryIndex ) && (key < galleryIndexes.lastGalleryIndex))
    setGalleryArray(slidingGallery)
  }

  function leftGalleryButtonHandler (window) {
    let {lastGalleryIndex} = window
    console.log(lastGalleryIndex)
    if (lastGalleryIndex >= 6) {
      console.log('yes')
      setLeftScrollButtonsAppear(true)
    }
    else {
      console.log('no')
      setLeftScrollButtonsAppear(false)
    }  
  }

  function rightGalleryButtonHandler (portfolio, lastGalleryIndex){
    if (portfolio.length > 5 && lastGalleryIndex !== portfolio.length) {
      setRightScrollButtonsAppear(true)
    }
    else {
      setRightScrollButtonsAppear(false)
    }
  }
    
  return (
    <>
      <PortfolioContainer>
        <SideNav>
          <ul>
            <li onClick={() => setAlbum('longbeach')}>Autumn Longbeach, WA</li>
            <li onClick={() => setAlbum('test1')}>Tessa</li>
            <li onClick={() => setAlbum('test2')}>Live Performances</li>
            <li onClick={() => setAlbum('test3')}>Test3</li>
          </ul>
        </SideNav>

        {/* <Slideshow> */}
        <NavButtons onClick={() => setWindowIndexes((windowIndexes.begIndex !== 0) && (portfolio.length >= 5) ? {begIndex: windowIndexes.begIndex - 1, lastIndex: windowIndexes.lastIndex - 1} : {
    begIndex: 0,
    lastIndex: 5,
  })}>
            <LeftArrowButton className='test' arrowButtonHandler={arrowButtonHandler}/>
          </NavButtons>
        <Gallery>
          
          <ImageBox>
            
            <img alt='test' src={portfolio[slide]}/>
            
          </ImageBox>
          
          <ScrollGallery leftButton={leftScrollButtonsAppear} rightButton={rightScrollButtonsAppear}>
            <button  className='leftGalleryButton'  onClick={() => setGalleryIndexes((galleryIndexes.begGalleryIndex !== 0) && (portfolio.length >= 5) ? {begGalleryIndex: galleryIndexes.begGalleryIndex - 1, lastGalleryIndex: galleryIndexes.lastGalleryIndex - 1} : {
              begGalleryIndex: 0,
              lastGalleryIndex: 5,
              })}><div className='dots'>. . .</div></button>
          {
            galleryArray.map((i, key) => {
              let adjust = key + galleryIndexes.begGalleryIndex
              console.log(adjust)
              return (
                <div className='scrollGalleryBorders' onClick={() => setSlide(adjust)}>
                  <img alt='test' src={i}/>
                </div> 
              )
            })
          }

            <button className='rightGalleryButton' onClick={() => setGalleryIndexes((galleryIndexes.lastGalleryIndex !== portfolio.length) && (portfolio.length >= 5) ? {begGalleryIndex: galleryIndexes.begGalleryIndex + 1, lastGalleryIndex: galleryIndexes.lastGalleryIndex + 1} : 

            {
              begGalleryIndex: portfolio.length - 5,
              lastGalleryIndex: portfolio.length,
            }
            )}><div className='dots'>. . .</div></button>
          </ScrollGallery>
        </Gallery>
        <NavButtons onClick={() => setWindowIndexes((windowIndexes.lastIndex !== portfolio.length) && (portfolio.length >= 5) ? {begIndex: windowIndexes.begIndex + 1, lastIndex: windowIndexes.lastIndex + 1} : 

{
  begIndex: portfolio.length - 5,
  lastIndex: portfolio.length,
})}>
            <RightArrowButton arrowButtonHandler={arrowButtonHandler}/>
          </NavButtons>
          {/* </Slideshow> */}
      </PortfolioContainer>
    </>
  );
}

export default Portfolio;
