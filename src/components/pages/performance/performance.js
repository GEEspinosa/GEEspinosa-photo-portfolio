import React from "react";
import { Gallery, GallerySmall, TopButton } from '../landing/styled.landing';
import useWindowSize from '../../../hooks/useWindowSize';

function Performance({imageClickHandler, pageAlbum, page, isLoaded}) {
    const landingAlbum = pageAlbum[page][0] || [];

    let count = 0;
    let smallGalleryArray1 = [];
    let smallGalleryArray2 = [];
    let smallGalleryArray3 = [];
  
    for (let i = 0; i < landingAlbum.length; i++) {
      if (count === 0) {
        smallGalleryArray1.push(landingAlbum[i]);
        count++;
      } else if (count === 1) {
        smallGalleryArray2.push(landingAlbum[i]);
        count++;
      } else if (count === 2) {
        smallGalleryArray3.push(landingAlbum[i]);
        count = 0;
      }
    }
  
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
  
    const { width } = useWindowSize();




    return (
        <>
      {width <= 1376 ? (
        <GallerySmall>
          <div className="row">
            <div className="column">
              {smallGalleryArray1.map(img => {
                return (
                  <img
                    key={img.id}
                    alt={img.text}
                    src={img.image}
                    onClick={() => imageClickHandler(img.id)}
                    style={{ width: '100%', cursor: 'pointer' }}
                    loading="lazy"
                  />
                );
              })}
            </div>

            <div className="column">
              {smallGalleryArray2.map(img => {
                return (
                  <img
                    key={img.id}
                    alt={img.text}
                    src={img.image}
                    onClick={() => imageClickHandler(img.id)}
                    style={{ width: '100%', cursor: 'pointer' }}
                    loading="lazy"
                  />
                );
              })}
            </div>

            <div className="column">
              {smallGalleryArray3.map(img => {
                return (
                  <img
                    key={img.id}
                    alt={img.text}
                    src={img.image}
                    onClick={() => imageClickHandler(img.id)}
                    style={{ width: '100%', cursor: 'pointer' }}
                    loading="lazy"
                  />
                );
              })}
            </div>
          </div>
        </GallerySmall>
      ) : (
        <Gallery>
          <ul>
            {landingAlbum.map(img => {
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
    )
}

export default Performance