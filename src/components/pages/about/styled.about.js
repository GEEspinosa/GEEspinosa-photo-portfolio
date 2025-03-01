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

  @media (max-width: 1385px) {
    text-align: center;
    justify-content: center;
    max-width: 90%;
  }

  .selfie-container {
    img {
      margin: auto;
    }

    a {
      display: flex;
      justify-content: center;
      margin: 20px;
      width: 5vh;

      @media (max-width: 750px) {
        width: 4.5vh;
      }
    }
      
    .ig-icon {
      width: 35px;
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
  padding: 20px 150px 20px 20px;
  color: grey;

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

const Selfie = styled.img`
  display: flex;
  flex-direction: column;
  max-height: 34vh;
  padding: 20px;

  @media (max-width: 1385px) {
    max-height: 45vh;
    max-width: 100%;
  }

  @media (max-width: 920px) {
    max-height: 45vh;
    max-width: 100%;
  }
`;

export { AboutContainer, ContentContainer, BioText, Selfie };
