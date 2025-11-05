// import styled from 'styled-components';

// const AboutContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: row;
//   flex-wrap: wrap;
//   height: 100%;
//   width: 100%;
  
// `;

// const ContentContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   max-width: 100%;
//   border: solid black;

//   align-items: center; // add this

//   @media (max-width: 1385px) {
//     text-align: left;
//     justify-content: center;
//     max-width: 90%;
//   }

//   .selfie-container {
//   border: solid black;
//     img {
//       margin: auto;
//     }

//     a {
//       display: flex;
//       justify-content: center;
//       margin: 10px;
//       width: 5vh;

//       @media (max-width: 750px) {
//         width: 4.5vh;
//       }
//     }

//     .ig-icon {
//       width: 30px;
//       margin: 10px;

//       @media (max-width: 1385px) {
//         display: flex;
//       }

//       @media (max-width: 750px) {
//         width: 30px;
//       }
//     }
//   }
// `;

// const BioText = styled.div`
//   padding: 20px 80px 20px 20px;
//   color: dimgray;
//   //max-width: 500px; // limit line length for easier reading
//   border: solid black;

//   @media (max-width: 1385px) {
//     padding: 10px 20px 20px 20px;
//   }

//   @media (max-width: 580px) {
//     h2 {
//       font-size: 1.3em;
//     }
//     p {
//       font-size: 0.9em;
//     }
//   }

//   @media (max-width: 425px) {
//     h2 {
//       font-size: 1.1em;
//     }
//     p {
//       font-size: 0.7em;
//     }
//   }
// `;

// // const Selfie = styled.img`
// //   display: flex;
// //   flex-direction: column;
// //   max-height: 34vh;
// //   padding: 20px;

// //   @media (max-width: 1385px) {
// //     max-height: 45vh;
// //     max-width: 100%;
// //   }

// //   @media (max-width: 920px) {
// //     max-height: 45vh;
// //     max-width: 100%;
// //   }
// // `;

// const Selfie = styled.img`
//   display: flex;
//   flex-direction: column;
//   max-height: 34vh;
//   padding: 20px;
//   border: solid black;
//   margin-right: 40px; // add this for spacing on larger screens

//   @media (max-width: 1385px) {
//     max-height: 45vh;
//     max-width: 100%;
//     margin-right: 0; // reset on smaller screens
//   }

//   @media (max-width: 920px) {
//     max-height: 45vh;
//     max-width: 100%;
//   }
// `;

// export { AboutContainer, ContentContainer, BioText, Selfie };

import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  min-height: 80vh;
  background-color: #fff;
  
`;

const SelfieContainer = styled.div`
  flex: 1 1 300px;
  max-width: 350px;
  text-align: left; /* left align so icon aligns left */
`;

const SelfieWrapper = styled.div`
  display: inline-block; /* shrink to image width */
  position: relative;
`;
const Selfie = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  display: block;
`;

const InstagramLink = styled.a`
  display: block;
  width: 24px; /* smaller icon */
  margin-top: 8px; /* space right below the image */
`;

const InstagramIcon = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const BioText = styled.div`
  flex: 2 1 400px;
  max-width: 600px;  /* Limit the width so it doesn't stretch too far */
  color: dimgray;
  font-family: 'Lato', sans-serif;
  line-height: 1.6;
  padding-left: 2rem; /* Add some spacing from the selfie */

  h2 {
    font-weight: 600;
    margin-bottom: 1rem;
    font-size: 1.8rem;
  }

  p {
    margin-bottom: 1rem;
    font-size: 1rem;
    white-space: pre-line;
  }

  @media (max-width: 700px) {
    flex-basis: 100%;
    max-width: 100%;  /* On small screens, let it be full width */
    padding-left: 0;
    text-align: center;
  }
`;

export {AboutContainer, SelfieContainer, SelfieWrapper, Selfie, InstagramLink, InstagramIcon, BioText}