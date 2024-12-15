import React from "react";
import styled from "styled-components";
import imageData from "../../assets/image-data";

const Test = styled.div`
  ul {
    display: flex;
    overflow-x: hidden;

    margin-right: 38px;
    flex-wrap: wrap;

    justify-content: center;
    list-style: none;
  }

  li {
    height: 55vh;
    margin: 14px;
  }

  img {
    max-height: 100%;
    min-width: 100%;
    object-fit: cover;
    vertical-align: bottom;
  }
`;

function Landing() {
  return (
    <>
      <Test>
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
      </Test>
    </>
  );
}

export default Landing;
