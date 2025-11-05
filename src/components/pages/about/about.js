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

import {
  AboutContainer,
  SelfieContainer,
  SelfieWrapper,
  Selfie,
  InstagramLink,
  InstagramIcon,
  BioText,
} from './styled.about';
import instagramIcon from '../../../assets/icons/instagram-grey-outline.png';

function About() {
  return (
    <AboutContainer>
      <SelfieContainer>
        <SelfieWrapper>
          <Selfie alt="doggie" src={'/images/gabi_instax_bryan2.webp'} />
          <InstagramLink
            href="https://www.instagram.com/_abriel_spinosa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon alt="Instagram Icon" src={instagramIcon} />
          </InstagramLink>
        </SelfieWrapper>
      </SelfieContainer>
      <BioText>
        <h2>About</h2>
        <p>
          I’m Gabriel Espinosa, a film photography enthusiast based in Portland,
          Oregon. Over the years, I’ve built a quiet collection of 35mm
          snapshots, documenting moments that resonate with me. There’s no
          single philosophy guiding the work, only a sustained curiosity and
          affection for the craft itself.
        </p>
        <p>
          The four categories here are loose, in no way representing a defined
          style or genre. Lately I’ve been drawn to matted tones, foregrounded
          negative space, and unorthodox subjects treated like portraits.
          Everything is shot on film—mostly with “Mina,” my Minolta SRT 100 I’ve
          had since I was a teenager. I’ve also used “Ike,” a Fujica AX3, and a
          still-unnamed Nikon FM2. Most of my recent black-and-white work is
          home-developed, focusing on Ilford HP5 and Ilfotec HC developer as I
          learn to steady my process.
        </p>
      </BioText>
    </AboutContainer>
  );
}

export default About;
