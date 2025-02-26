import React from 'react';
import selfInstaxBryan from '../../../assets/images/gabi_instax_bryan2.png';
import {AboutContainer, BioText, Selfie} from './styled.about'

function About() {
  return (
    <>
      <AboutContainer>
        <Selfie alt="doggie" src={selfInstaxBryan} />
        <BioText>
          <h2>About Me</h2>
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
      </AboutContainer>
    </>
  );
}

export default About;
