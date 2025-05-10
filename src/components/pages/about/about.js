import React from 'react';
import selfInstaxBryan from '../../../assets/images/gabi_instax_bryan2.png';
import {
  AboutContainer,
  ContentContainer,
  BioText,
  Selfie,
} from './styled.about';
import instagramIcon from '../../../assets/icons/instagram-grey-outline.png';

function About() {
  return (
    <>
      <AboutContainer>
        <ContentContainer>
          <div className="selfie-container">
            <Selfie alt="doggie" src={selfInstaxBryan} />
            <a href="https://www.instagram.com/_abriel_spinosa/">
              <img className="ig-icon" alt="ig-icon" src={instagramIcon} />
            </a>
          </div>
          <BioText>
            <h2>About</h2>
            <br />
            <p>
            I’m Gabriel Espinosa, a film photography enthusiast based in Portland. <br />
            Over the years, I’ve built a loose portfolio of snapshots from around the area, <br />
            documenting moments that resonate with me. <br />
            <br />
            My journey with film began in high school. I received a Minolta SR-T 100, <br /> 
            affectionately named "Mina," for my seventeenth birthday. <br />I quickly became one of those “photo nerds,” 
            <br />spending countless hours in the school’s darkroom, <br />
            assisting classmates in their intro to black and white courses.
            <br />
              <br />
              Years later, just before the COVID-19 lockdowns, I decided to bring Mina <br /> out of retirement to document running my own recording studio. <br />
              Since then, I’ve fallen back in love with the process, exploring <br />film photography purely for its own sake. <br />
              There’s no grand philosophy behind my work—just a passion for the craft itself.
              <br />
              <br />
              I do imagine my hobby fitting into a quiet retirement, <br /> 
              writing ghost stories for no one on the Oregon Coast, <br />teaching myself math, and capturing the timeless <br />beauty of the same stretches of coastline through my lens. <br />
            </p>
          </BioText>
        </ContentContainer>
      </AboutContainer>
    </>
  );
}

export default About;
