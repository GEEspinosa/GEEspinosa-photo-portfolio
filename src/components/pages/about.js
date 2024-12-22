import React from "react";
import styled from "styled-components";
import selfInstaxBryan from '../../assets/images/gabi_instax_bryan2.png'

const AboutContainer = styled.div`
  
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  border: solid;
  

  
`;

const BioText = styled.div`
  padding: 20px 150px 20px 20px;
  border: solid;
  color: grey;
`;


const Selfie = styled.img`
  max-height: 34vh;
  padding: 20px;
  border: solid;
  
`;




function About() {
  return (
    <>
      <AboutContainer>
        <Selfie alt='doggie' src={selfInstaxBryan}/>
        <BioText>
          <h2>About Me</h2>
          <p>Basking in the glory of an unadultrated hobby, <br/>
            shooting film originally came in tandem with high school darkroom classes.<br/>
            For decades, analog photography has always been a novelty until I started<br/>
            an independent recording studio in my hometown of Portland, OR. <br/>
            Fascinated by musicians' creative processes <br/>
            while making albums, I brought out Mina and began documenting vignettes <br/>
            as a merging between the fleeting 
          </p>
          <h3>Camera Family</h3>
          <p>
            "Mina" - Minolta SRT100 35mm SLR and first camera, <br/>
            gifted to me when I was a teenager <br/>
            <br/>
            "Ike" - Fujica AX3 35mm SLR stranded by its laster owner, <br/>
            a motocycling free spirit neightbor that loved  <br/>
            regaling me with stories of SF trash scene of his youth.<br/>
            <br/>
            "Boris" - Rolleiflex Model T TLR that shoots 120 medium format film. 
          </p>
        </BioText>
        <div>

        </div>
      </AboutContainer> 
      
    </>
    
  );
}

export default About;
