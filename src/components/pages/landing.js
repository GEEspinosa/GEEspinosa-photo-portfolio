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

function Landing({imageClickHandler}) {

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
    </>
  );
}

export default Landing;
