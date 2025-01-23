import React from "react";
import imageData from "../../../assets/image-data";
import { Gallery, GallerySmall, TopButton } from "./styled.landing";
import useWindowSize from "../../../hooks/useWindowSize";


// dev notes: logic to sort through imageData and make three arrays for 
// smallGallery columns

let count = 0;
let smallGalleryArray1 = [];
let smallGalleryArray2 = [];
let smallGalleryArray3 = [];

for (let i = 0; i < imageData.length; i++) {

  if (count === 0) {
    smallGalleryArray1.push(imageData[i]);
    count++;
  }
  else if (count === 1) {
    smallGalleryArray2.push(imageData[i])
    count++;
  }
  else if (count === 2) {
    smallGalleryArray3.push(imageData[i]);
    count = 0
  }
}

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


  //dev notes: checking resizing window to change from larger to smaller gallery layout
  // can't tell if innerwidth 802 or 956?

  // window.addEventListener("resize", () => {
  //   if (window.innerWidth <= 1293) {
  //     setSmallLandingLayout(true);
  //   } else {
  //     setSmallLandingLayout(false);
  //   }
  // });


  const {width} = useWindowSize()

  return (
    <>
      {width <= 1376 ? (
        <GallerySmall>
          <div className="row">
            <div className="column">
              {
                smallGalleryArray1.map((img) => {
                  return (
                    <img 
                      key={img.id}
                      alt={img.text}
                      src={img.image}
                      onClick={() => imageClickHandler(img.id)}
                      style={{ width: "100%", cursor: "pointer" }}
                      loading="lazy" 
                    /> 
                  )
                })
              }
  
            </div>

            <div className="column">

            {
                smallGalleryArray2.map((img) => {
                  return (
                    <img 
                      key={img.id}
                      alt={img.text}
                      src={img.image}
                      onClick={() => imageClickHandler(img.id)}
                      style={{ width: "100%", cursor: "pointer" }}
                      loading="lazy" 
                    /> 
                  )
                })
              }
              
            </div>

            <div className="column">
            {
                smallGalleryArray3.map((img) => {
                  return (
                    <img 
                      key={img.id}
                      alt={img.text}
                      src={img.image}
                      onClick={() => imageClickHandler(img.id)}
                      style={{ width: "100%", cursor: "pointer"}}
                      loading="lazy" 
                    /> 
                  )
                })
              }

            </div>
          </div>
        </GallerySmall>
      ) : (
        <Gallery>
          <ul>
            {imageData.map((img) => {
              if ('album' in img){
                if ('landing' in img.album){return (
                  <li key={img.id}>
                    <img
                      alt={img.text}
                      src={img.image}
                      onClick={() => imageClickHandler(img.id)}
                      loading="lazy"
                    />
                  </li>
                )};
              }
                
                
                
            })}
          </ul>
        </Gallery>
      )}

      <TopButton onClick={scrollToTop} >
        <button >Scroll To Top</button>
      </TopButton>
    </>
  );
}

export default Landing;
