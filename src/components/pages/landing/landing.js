import React from "react";
import imageData from "../../../assets/image-data";
import { Gallery, TopButton } from "./styled.landing";

function Landing({ imageClickHandler }) {
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
              <li key={img.id}>
                <img
                  alt={img.text}
                  src={img.image}
                  onClick={() => imageClickHandler(img.id)}
                  loading="lazy"
                />
              </li>
            );
          })}
        </ul>
      </Gallery>
      <TopButton onClick={scrollToTop}>
        <button>Scroll To Top</button>
      </TopButton>
    </>
  );
}

export default Landing;
