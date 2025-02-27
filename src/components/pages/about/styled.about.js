import styled from "styled-components";

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

export {
    AboutContainer, BioText, Selfie
}