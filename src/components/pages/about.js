import React from "react";
import styled from "styled-components";
import selfInstaxBryan from '../../assets/images/gabi_instax_bryan2.png';
import imageData from "../../assets/image-data";

const AboutContainer = styled.div`
  display: flex;
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

const CameraFamilyContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: 100%;
  width: 100%;
  border: solid;

  img{
    max-height: 34vh;
    padding: 20px;
    border: solid;
  }
`;

const Mina = styled.div`
  padding: 20px 230px 20px 20px;
  border: solid;
  color: grey;
`

const Ike = styled.div`
  padding: 20px 230px 20px 20px;
  border: solid;
  color: grey;
`

const Boris = styled.div`
  padding: 20px 230px 20px 20px;
  border: solid;
  color: grey;
`


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
        </BioText>
        <CameraFamilyContainer>       
        <Mina>
          <p>
            "Mina" - Minolta SRT100 35mm SLR and first camera, <br/>
            gifted to me when I was a teenager <br/>
            <br/>
          </p>       
        </Mina> 
        <img alt='test' src={imageData[1].image}/>
        </CameraFamilyContainer>
        <CameraFamilyContainer>
        <img alt='test' src={imageData[1].image}/>
          <Ike>
            <p>
            "Ike" - Fujica AX3 35mm SLR stranded by its laster owner, <br/>
            a motocycling free spirit neightbor that loved  <br/>
            regaling me with stories of SF trash scene of his youth.<br/>
            <br/>
          </p>
          </Ike>
        </CameraFamilyContainer>
        <CameraFamilyContainer>
          <Boris>
            <p>
              "Boris" - Rolleiflex Model T medium format TLR. 
            </p>
          </Boris>
          <img alt='test' src={imageData[1].image}/>
        </CameraFamilyContainer>
      </AboutContainer>     
    </>   
  );
}

export default About;
