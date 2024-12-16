import React from "react";
import styled from "styled-components";
import imageData from "../../assets/image-data";

const Gallery = styled.div`
box-sizing: border-box;  

ul {
    display: flex;
    margin-right: 38px;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
  }

  li {
    
    height: 32vh;
    margin: 4px;

    :hover {
      cursor: pointer;
    }

    //dev note: bigger images
    // height: 55vh;
    // margin: 14px;
    // border: solid;
    
    @media (max-width: 768px) {
      
      //dev note: adding width will look good with .rows
      //width: 40%;
      height: 100%;

      //margin: 14px;
      margin: 6px;
    }
  }

  img {
    width: 100%;
    height: 100%;
    max-height: 100%;
    min-width: 100%;
    object-fit: cover;
    vertical-align: bottom;

    
  }
`;

const TopButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;


  button {
    background-color: white;
    color: black;
    border: 2px solid #555555;
    font-size: 16px;
    padding: 16px 32px;
    margin: 4px 2px;
  
    transition-duration: 0.4s;
    cursor: pointer;
  }
  
  :hover {
    background-color: #555555;
    color: white;
  }
`

function Landing({imageClickHandler}) {


  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 20; // Adjust the divisor for speed
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 30); // Adjust the interval time for smoothness
  };

  return (
    <>     
      <Gallery>
        <ul>
          {imageData.map((img) => {     
            return (  
              <li>
                <img 
                  alt={img.text} 
                  src={img.image} 
                  key={img.id} 
                  onClick={() => imageClickHandler(img.id)}
                  loading="lazy" />
              </li>
            );
          })}
        </ul>
      </Gallery>    
      <TopButton onClick ={scrollToTop}>
        <button>Scroll To Top</button>
      </TopButton>   
    </>
  );
}

export default Landing;
