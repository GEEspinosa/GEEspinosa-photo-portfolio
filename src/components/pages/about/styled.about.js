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

// const CameraFamilyContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-direction: row;
//   height: 100%;
//   width: 100%;
//   border: solid;

//   img {
//     max-height: 34vh;
//     padding: 20px;
//     border: solid;
//   }
// `;

// const Mina = styled.div`
//   padding: 20px 230px 20px 20px;
//   border: solid;
//   color: grey;
// `;

// const Ike = styled.div`
//   padding: 20px 230px 20px 20px;
//   border: solid;
//   color: grey;
// `;

// const Boris = styled.div`
//   padding: 20px 230px 20px 20px;
//   border: solid;
//   color: grey;
// `;

export {
    AboutContainer, BioText, Selfie
}