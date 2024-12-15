import React from "react";
import styled from "styled-components";
import selfInstaxBryan from '../../assets/images/gabi_instax_bryan2.png'

const AboutContainer = styled.div`
  
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  
  
`;

const BioText = styled.div`
  padding: 20px;
  
`;


const Selfie = styled.img`
  max-height: 30vh;
  padding: 20px;
  
`;


function About() {
  return (
    <>
      <AboutContainer>
        <Selfie alt='doggie' src={selfInstaxBryan}/>
        <BioText>
          <h2>About Me</h2>
          <p>asdf;lkjsdf asd;fklj fdkdfj a;sdakldf v;lkdsjf ad;lfkdsfa<br/>
            sadf;kljdas;lfkjdas ads;lkfadjs asdfadsfklj saddf;lkjd sasd<br/>
            dsaf;lkdjsafkl asdf;lkjsd asd;flkj fddsa;lkjdsf asd;lkfj<br/>
          </p>
        </BioText>
      </AboutContainer> 
      
    </>
    
  );
}

export default About;
