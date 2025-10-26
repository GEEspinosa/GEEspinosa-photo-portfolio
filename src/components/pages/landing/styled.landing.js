import styled from 'styled-components';

const LandingGrid = styled.div`
 display: grid;
  grid-template-columns: repeat(2, 1fr); // start as 2 columns
  gap: 30px; // flexible spacing between images
  max-width: 800px; // optional max width
  margin: 0 auto; // center grid horizontally
  padding: 16px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr; // collapse to single column on small screens
  }
`;

const StyledImage = styled.img`
width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px; // optional styling
`;

export { LandingGrid, StyledImage };
