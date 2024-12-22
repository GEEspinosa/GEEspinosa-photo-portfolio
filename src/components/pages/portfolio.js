import React, {useState, useEffect} from "react";
import styled from "styled-components";
import imageData from "../../assets/image-data";

const PortfolioContainer = styled.div`
  border: solid;
  display: flex;
  
  width: 100%;
  height: 100%;
  

`
const SideNav = styled.div`
  border: solid;

  
`;

const Gallery = styled.div`
  border: solid;
  position: relative;
  width: 100vw;
  height: 80vh;
  padding: 25px;
  object-fit: contain;
`;

const ImageBox = styled.div`
 
  border: solid;
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
  border: solid;
  display: flex;
  align-items; stretch;
  width: 100%;
  padding: 5px;
  object-fit: contain;
  img {  
    max-width: 15%;
    min-width: 10%;
    margin: 5px;
    flex-grow: 1;
    background-position: center;
    background-size: cover;
  }
`;






function Portfolio() {
  const [album, setAlbum] = useState('cover')
  const [portfolio, setPortfolio] = useState([])
  const [slide, setSlide] = useState(null)

  useEffect (() => {
    let p = [];
      imageData.map((entry) => {
        if ('album' in entry ) {
          if (album in entry.album) {
            p.push(entry.image)
            console.log(portfolio)
          }
        }
      })
      setPortfolio(p)
      setSlide(0)
    
    
  }, [album])

  return (
    <>
      <PortfolioContainer>
        <SideNav>
          <ul>
            <li onClick={() => setAlbum('longbeach')}>Longbeach</li>
            <li onClick={() => setAlbum('tessa')}>Tessa</li>
            <li onClick={() => setAlbum('live')}>Live Performances</li>
          </ul>
        </SideNav>
        <Gallery>
          <ImageBox>
            <img alt='test' src={portfolio[slide]} onClick={() => setSlide(slide + 1)}/>
          </ImageBox>
          <ScrollGallery>
          {
            portfolio.map(i => {
              return (
                <img alt='test' src={i}/>
              )
            })
          }

          </ScrollGallery>
        </Gallery>
      </PortfolioContainer>
    </>
  );
}

export default Portfolio;
