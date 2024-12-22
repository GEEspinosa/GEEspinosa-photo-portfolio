import React, {useEffect} from "react";
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
  //border: solid;
  background-color: gainsboro;
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
  width: 100%; 
  padding: 5px;
  
  .scrollGalleryBorders {
    display: flex;
    background-color: white;
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
`;

const NavButtons = styled.div`
  cursor: pointer;
  margin: auto;
  bottom: 40%;

  :hover {
    background-color: gainsboro;
  }
`;

const Slideshow = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  align-items: center;
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
  
  useEffect (() => {
    let p = [];
      imageData.map((entry) => {
        if ('album' in entry ) {
          if (album in entry.album) {
            p.push(entry.image)
          }
        } 
      });
      console.log(portfolio)
      setPortfolio(p)
      setSlide(0)  
  }, [album])

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
        <NavButtons>
            <LeftArrowButton className='test' arrowButtonHandler={arrowButtonHandler}/>
          </NavButtons>
        <Gallery>
          
          <ImageBox>
            
            <img alt='test' src={portfolio[slide]}/>
            
          </ImageBox>
          
          <ScrollGallery>
          {
            portfolio.map((i, key) => {
              return (
                <div className='scrollGalleryBorders' onClick={() => setSlide(key)}>
                  <img alt='test' src={i}/>
                </div> 
              )
            })
          }
          </ScrollGallery>
        </Gallery>
        <NavButtons>
            <RightArrowButton arrowButtonHandler={arrowButtonHandler}/>
          </NavButtons>
          {/* </Slideshow> */}
      </PortfolioContainer>
    </>
  );
}

export default Portfolio;
