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

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1; /* ensures square shape */
  overflow: hidden; /* hides overflow outside the square */
  border: 5px solid #000000ff;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 0.3s ease; // smooth transition

  opacity: 0;
  animation: fadeIn 1s ease forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  &:hover {
    filter: invert(1) brightness(0.7); // invert + slightly dim
  }
`;

const Label = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #e0e0e0;
  font-family: 'Playfair Display', serif;
  font-weight: 600;
  letter-spacing: 0.5px;
  font-size: 1rem;
  text-align: center;
  pointer-events: none;
  text-transform: uppercase;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5); /* 👈 key line */
  opacity: 0;

  /* Show label when hovering on desktop */
  ${ImageWrapper}:hover & {
    opacity: 1;
  }

  /* Always visible on mobile/touch devices */
  @media (hover: none) and (pointer: coarse) {
    opacity: 1;
  }
`;

export { LandingGrid, StyledImage, ImageWrapper, Label };
