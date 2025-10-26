import { LandingGrid, StyledImage } from './styled.landing';

function Landing({ imageClickHandler, pageAlbum, page }) {
  return (
    <>
      <LandingGrid>
        <StyledImage alt="test" src={'/images/gabi_instax_bryan2.webp'} />
        <StyledImage alt="test" src={'/images/gabi_instax_bryan2.webp'} />
        <StyledImage alt="test" src={'/images/gabi_instax_bryan2.webp'} />
        <StyledImage alt="test" src={'/images/gabi_instax_bryan2.webp'} />
      </LandingGrid>
    </>
  );
}

export default Landing;
