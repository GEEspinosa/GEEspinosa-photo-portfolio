import React, { useState, useEffect } from 'react';
import { Gallery, GallerySmall, TopButton } from './styled.gallery';
import useWindowSize from '../../../hooks/useWindowSize';

// dev notes: logic to sort through imageData and make three arrays for
// smallGallery columns

function GalleryPage({ imageClickHandler, pageAlbum, page }) {
  const [smGalleryColNum, setSmGalleryColNum] = useState(0);
  const [smGalleryArray, setSmallGalleryArray] = useState([]);

  const landingAlbum = pageAlbum[page][0] || [];
  const { width } = useWindowSize();

  function fillingColumns(smGalleryColNum, landingAlbum) {
    let mainArray = new Array(smGalleryColNum).fill(null).map(() => []);
    let count = 0;

    for (let i = 0; i < landingAlbum.length; i++) {
      if (count < smGalleryColNum - 1) {
        mainArray[count].push(landingAlbum[i]);
        count++;
        continue;
      } else if (count === smGalleryColNum - 1) {
        mainArray[count].push(landingAlbum[i]);
        count = 0;
      }
    }
    setSmallGalleryArray(mainArray);
  }

  useEffect(() => {
    if (width > 1025) {
      setSmGalleryColNum(3);
    } else if (width > 725) {
      setSmGalleryColNum(2);
    } else setSmGalleryColNum(1);
  }, [width]);

  useEffect(() => {
    fillingColumns(smGalleryColNum, landingAlbum);
  }, [smGalleryColNum]);

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
      {width <= 1376 ? (
        <GallerySmall smGalleryColNum={smGalleryColNum}>
          <div className="row">
            {smGalleryArray.map((arr, key) => {
              return (
                <div className="column">
                  {smGalleryArray[key].map(img => {
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
              );
            })}
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
  );
}
export default GalleryPage;
