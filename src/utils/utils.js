//dev note: id incrementor

let id = 0;

const addId = () => {
  return id++;
};

//dev note: smooth scrolling function for button botton

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

export { addId, scrollToTop };
