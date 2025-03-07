import React from "react";
import { ScrollToTopButtonStyled } from "./styled.scroll-to-top-button";


function ScrollToTopButton () {

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
        <ScrollToTopButtonStyled onClick={scrollToTop}>
            <button>Scroll To Top</button>
        </ScrollToTopButtonStyled>
    )

}

export default ScrollToTopButton;