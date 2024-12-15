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
    height: 55vh;
    margin: 14px;
    
    @media (max-width: 1140px) {
      height: 100%;
      margin: 14px;
    }
  }

  img {
    width: 100%;
    max-height: 100%;
    min-width: 100%;
    object-fit: cover;
    vertical-align: bottom;
  }
`;

function Landing() {
  return (
    <>
      <Gallery>
        <ul>
          {imageData.map((img, key) => {
            console.log(img.image);
            return (
              <li>
                <img alt={img.text} src={img.image} key={key} loading="lazy" />
              </li>
            );
          })}
        </ul>
      </Gallery>
    </>
  );
}

export default Landing;
