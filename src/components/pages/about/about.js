// import {
//   AboutContainer,
//   ContentContainer,
//   BioText,
//   Selfie,
// } from './styled.about';
// import instagramIcon from '../../../assets/icons/instagram-grey-outline.png';

// function About() {
//   return (
//     <>
//       <AboutContainer>
//         <ContentContainer>
//           <div className="selfie-container">
//             <Selfie alt="doggie" src={'/images/gabi_instax_bryan2.webp'} />
//             <a href="https://www.instagram.com/_abriel_spinosa/">
//               <img className="ig-icon" alt="ig-icon" src={instagramIcon} />
//             </a>
//           </div>
//           <BioText>
//             <h2>About</h2>
//             <br />
//             <p>
//               I’m Gabriel Espinosa, a film photography enthusiast based in
//               Portland. <br />
//               Over the years, I’ve built a loose portfolio of snapshots from
//               around the area, <br />
//               documenting moments that resonate with me. <br />
//               There’s no grand philosophy behind my work—just a passion for the
//               craft itself.
//               <br />
//               I do imagine my hobby fitting into a quiet retirement, <br />
//               writing ghost stories for no one on the Oregon Coast, <br />
//               teaching myself math, and endlessly capturing the <br />
//               same stretches of coastline like a ghost from a story. <br />
//             </p>
//           </BioText>
//         </ContentContainer>
//       </AboutContainer>
//     </>
//   );
// }

// export default About;


import React from 'react';
import styled from 'styled-components';
import instagramIcon from '../../../assets/icons/instagram-grey-outline.png'

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

function About() {
  return (
    <AboutContainer>
      <SelfieContainer>
  <SelfieWrapper>
    <Selfie alt="doggie" src={'/images/gabi_instax_bryan2.webp'} />
    <InstagramLink href="https://www.instagram.com/_abriel_spinosa/" target="_blank" rel="noopener noreferrer">
      <InstagramIcon alt="Instagram Icon" src={instagramIcon} />
    </InstagramLink>
  </SelfieWrapper>
</SelfieContainer>
      <BioText>
        <h2>About</h2>
        <p>
          I’m Gabriel Espinosa, a film photography enthusiast based in Portland, Oregon. Over the years,
          I’ve built a quiet collection of 35mm snapshots, documenting moments that resonate with me.
          There’s no single philosophy guiding the work, only a sustained curiosity and affection for
          the craft itself.
        </p>
        <p>
          The four categories here are loose, in no way representing a defined style or genre. Lately
          I’ve been drawn to matted tones, foregrounded negative space, and unorthodox subjects treated
          like portraits. Everything is shot on film—mostly with “Mina,” my Minolta SRT 100 I’ve had
          since I was a teenager. I’ve also used “Ike,” a Fujica AX3, and a still-unnamed Nikon FM2.
          Most of my recent black-and-white work is home-developed, focusing on Ilford HP5 
          and Ilfotec HC developer as I learn to steady my process.
        </p>
      </BioText>
    </AboutContainer>
  );
}

export default About;