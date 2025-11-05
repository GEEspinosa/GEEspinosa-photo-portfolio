import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 100%;
  border: solid black;

  align-items: center; // add this

  @media (max-width: 1385px) {
    text-align: left;
    justify-content: center;
    max-width: 90%;
  }

  .selfie-container {
  border: solid black;
    img {
      margin: auto;
    }

    a {
      display: flex;
      justify-content: center;
      margin: 10px;
      width: 5vh;

      @media (max-width: 750px) {
        width: 4.5vh;
      }
    }

    .ig-icon {
      width: 30px;
      margin: 10px;

      @media (max-width: 1385px) {
        display: flex;
      }

      @media (max-width: 750px) {
        width: 30px;
      }
    }
  }
`;

const BioText = styled.div`
  padding: 20px 80px 20px 20px;
  color: dimgray;
  //max-width: 500px; // limit line length for easier reading
  border: solid black;

  @media (max-width: 1385px) {
    padding: 10px 20px 20px 20px;
  }

  @media (max-width: 580px) {
    h2 {
      font-size: 1.3em;
    }
    p {
      font-size: 0.9em;
    }
  }

  @media (max-width: 425px) {
    h2 {
      font-size: 1.1em;
    }
    p {
      font-size: 0.7em;
    }
  }
`;

// const Selfie = styled.img`
//   display: flex;
//   flex-direction: column;
//   max-height: 34vh;
//   padding: 20px;

//   @media (max-width: 1385px) {
//     max-height: 45vh;
//     max-width: 100%;
//   }

//   @media (max-width: 920px) {
//     max-height: 45vh;
//     max-width: 100%;
//   }
// `;

const Selfie = styled.img`
  display: flex;
  flex-direction: column;
  max-height: 34vh;
  padding: 20px;
  border: solid black;
  margin-right: 40px; // add this for spacing on larger screens

  @media (max-width: 1385px) {
    max-height: 45vh;
    max-width: 100%;
    margin-right: 0; // reset on smaller screens
  }

  @media (max-width: 920px) {
    max-height: 45vh;
    max-width: 100%;
  }
`;

export { AboutContainer, ContentContainer, BioText, Selfie };
