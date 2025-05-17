import { useState, useEffect } from 'react';
import { Gallery, GallerySmall } from './styled.gallery';
import ScrollToTopButton from '../scroll-to-top-button/scroll-to-top-button';
import useWindowSize from '../../../hooks/useWindowSize';

function GalleryPage({ imageClickHandler, pageAlbum, page }) {
  const [smGalleryColNum, setSmGalleryColNum] = useState(0);
  const [smGalleryArray, setSmallGalleryArray] = useState([]);

  // dev note: `galleryAlbum` is assigned a value based on `pageAlbum` (received as props).
  // It checks for the key-value pair with the current `page` as the key. If found, it returns the array of objects,
  // otherwise, it defaults to an empty array. This prevents React from crashing due to undefined values before state is set.

  const galleryAlbum = pageAlbum[page][0] || [];

  //Dev Note: destructuring width from imported custom hook useWindowSize

  const { width } = useWindowSize();

  //Dev Note: function takes state as arguments, an column count based on integer 1-3 and an array of objects.
  //then it creates a new array and adds number of empty arrays based on column count.
  //Uses counter to add up to max number of columns while pushing them in respective column array in mainArray,
  //then reseting while allowing i to increment to the end of gallery album.
  //mainArray is set in state for jsx mapping below.

  function fillingColumns(smGalleryColNum, galleryAlbum) {
    let mainArray = new Array(smGalleryColNum).fill(null).map(() => []);
    let count = 0;

    for (let i = 0; i < galleryAlbum.length; i++) {
      if (count < smGalleryColNum - 1) {
        mainArray[count].push(galleryAlbum[i]);
        count++;
        continue;
      } else if (count === smGalleryColNum - 1) {
        mainArray[count].push(galleryAlbum[i]);
        count = 0;
      }
    }
    setSmallGalleryArray(mainArray);
  }

  //Dev Note: useEffect hook that sets an integer between 1-3 as state
  //for above function to read and determine number of columns.
  //It updates based on imported custom hook useWindowSize, which tracks all resizing of browser.

  useEffect(() => {
    if (width > 1025) {
      setSmGalleryColNum(3);
    } else if (width > 725) {
      setSmGalleryColNum(2);
    } else setSmGalleryColNum(1);
  }, [width]);

  //Dev Note: another useEffect hook calling fillColumns function triggered by smGalleryColNum changes.
  //This allows for the smaller gallery to stay responsive to further resizing.

  useEffect(() => {
    fillingColumns(smGalleryColNum, galleryAlbum);
  }, [smGalleryColNum]);

  // dev note: JSX below uses a ternary to render either "Gallery" or "GallerySmall" based on browser width (1376px).
  // - For screens <= 1376px, it renders `GallerySmall`, which maps over `smGalleryArray` (an array of arrays).
  // - For larger screens, it renders `Gallery`, mapping over `galleryAlbum` directly.
  // Each layout creates `<img>` elements with dynamically assigned attributes based on data from either `smGalleryArray` or `galleryAlbum`.

  // dev note: At the bottom, an imported Styled-Component for the "scroll up" button is rendered.

  return (
    <>
      {width <= 1376 ? (
        <GallerySmall smGalleryColNum={smGalleryColNum}>
          <div className="row" data-testid="small-gallery-div">
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
          <ul data-testid="gallery">
            {galleryAlbum.map(img => {
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
