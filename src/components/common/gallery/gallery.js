import React, { useState, useEffect } from 'react';
import { Gallery, GallerySmall } from './styled.gallery';
import ScrollToTopButton from '../scroll-to-top-button/scroll-to-top-button';
import useWindowSize from '../../../hooks/useWindowSize';

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

  return (
    <>
      {width <= 1376 ? (
        <GallerySmall smGalleryColNum={smGalleryColNum}>
          <div className="row" data-testid = 'small-gallery-div'>
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
          <ul data-testid = 'gallery'>
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
      <ScrollToTopButton />
    </>
  );
}
export default GalleryPage;
