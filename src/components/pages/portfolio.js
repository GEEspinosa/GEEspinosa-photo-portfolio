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
  //border: solid;
  display: flex;
  align-items; stretch;
  width: 100%;
  
  padding: 5px;
  
  
  .scrollGalleryBorders{
  display: flex;
  justify-content: center;
  width: 15vh;
  height: 15vh;
  border: solid;
  margin: 5px;
  
  }


  img {  
    
    max-width: 95%;
    
    min-height: 30%;
    

    margin: 5px;
    flex-grow: 1;
    object-fit: contain;
   
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
            <li onClick={() => setAlbum('test1')}>Tessa</li>
            <li onClick={() => setAlbum('test2')}>Live Performances</li>
            <li onClick={() => setAlbum('test3')}>Test3</li>
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
                <div className='scrollGalleryBorders'>
                  <img alt='test' src={i}/>
                </div>
                
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
