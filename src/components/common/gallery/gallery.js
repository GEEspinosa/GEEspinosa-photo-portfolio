import React, { useState, useEffect } from 'react';
import { Gallery, GallerySmall } from './styled.gallery';
import ScrollToTopButton from '../scroll-to-top-button/scroll-to-top-button';
import useWindowSize from '../../../hooks/useWindowSize';

function GalleryPage({ imageClickHandler, pageAlbum, page }) {
  const [smGalleryColNum, setSmGalleryColNum] = useState(0);
  const [smGalleryArray, setSmallGalleryArray] = useState([]);

  //Dev Note: a variable is assigned a disjunctive identity,
  //this says it's either pageAlbum, which is sent as props, looking inside for a key-value pair, 
  //a page property with a value of an array that holds objects, or it's an empty array. 
  //This ensures that React doesn't crash being unable to read undefined values before state is set.

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


  //Dev Note: most JSX below exists in a giant terinary statement. 
  //Given width of browser size (1376 px), the component renders either "Gallery" or "GallerySmall"
  //Styled-Components, each using different layout styles and mapping over two different arrays.
  //the former simply maps over galleryAlbum as is 
  //while the latter maps over the mainArray (an array of arrays) set to state in smGalleryArray.
  //For each layout, mapping over objects creates new <img> elements with dynamically assigned values 
  //to attributes based on inputed data stored in galleryAlbum objects

  //Dev Note: at the bottom, an imported Styled-Component for a scroll up button is rendering.

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
