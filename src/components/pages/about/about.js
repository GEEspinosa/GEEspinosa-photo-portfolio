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
              Basking in the glory of an unadultrated hobby, <br />
              shooting film originally came in tandem with high school darkroom
              classes.
              <br />
              For decades, analog photography has always been a novelty until I
              started
              <br />
              an independent recording studio in my hometown of Portland, OR.{' '}
              <br />
              Fascinated by musicians' creative processes <br />
              while making albums, I brought out Mina and began documenting
              vignettes <br />
              as a merging between the fleeting
            </p>
          </BioText>
        </ContentContainer>
      </AboutContainer>
    </>
  );
}

export default About;
