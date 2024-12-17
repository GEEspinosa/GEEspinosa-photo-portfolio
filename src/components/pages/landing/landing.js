import React from "react";
import imageData from "../../../assets/image-data";
import { Gallery, GallerySmall, TopButton } from "./styled.landing";

function Landing({
  imageClickHandler,
  smallLandingLayout,
  setSmallLandingLayout,
}) {
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

  window.addEventListener("resize", () => {
    if (window.innerWidth <= 802) {
      setSmallLandingLayout(true);
    } else {
      setSmallLandingLayout(false);
    }
  });

  return (
    <>
      {smallLandingLayout ? (
        <GallerySmall>
          <div className="row">
            <div className="column">
              <img
                alt="test"
                src={imageData[3].image}
                style={{ width: "100%" }}
              ></img>
              <img
                alt="test"
                src={imageData[4].image}
                style={{ width: "100%" }}
              ></img>
              <img
                alt="test"
                src={imageData[10].image}
                style={{ width: "100%" }}
              ></img>
            </div>

            <div className="column">
              <img
                alt="test"
                src={imageData[2].image}
                style={{ width: "100%" }}
              ></img>
              <img
                alt="test"
                src={imageData[9].image}
                style={{ width: "100%" }}
              ></img>
              <img
                alt="test"
                src={imageData[20].image}
                style={{ width: "100%" }}
              ></img>
            </div>

            <div className="column">
              <img
                alt="test"
                src={imageData[1].image}
                style={{ width: "100%" }}
              ></img>
              <img
                alt="test"
                src={imageData[19].image}
                style={{ width: "100%" }}
              ></img>
              <img
                alt="test"
                src={imageData[13].image}
                style={{ width: "100%" }}
              ></img>
            </div>
          </div>
        </GallerySmall>
      ) : (
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
      )}

      <TopButton onClick={scrollToTop}>
        <button>Scroll To Top</button>
      </TopButton>
    </>
  );
}

export default Landing;
