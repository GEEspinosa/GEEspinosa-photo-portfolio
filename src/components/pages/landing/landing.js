import { Link } from 'react-router-dom';
import {
  LandingGrid,
  StyledImage,
  ImageWrapper,
  Label,
} from './styled.landing';

function Landing({ setPage }) {
  const landingLinks = [
    {
      src: '/images/bonsai.webp',
      alt: 'test',
      to: '/location',
      pageKey: 'location',
      label: 'LOCATION',
    },
    {
      src: '/images/tessa_beach.webp',
      alt: 'people',
      to: '/people',
      pageKey: 'people',
      label: 'PEOPLE',
    },
    {
      src: '/images/faded_mural.webp',
      alt: 'impression',
      to: '/impression',
      pageKey: 'impression',
      label: 'IMPRESSIONS',
    },
    {
      src: '/images/sean_guitar.webp',
      alt: 'performance',
      to: '/performance',
      pageKey: 'performance',
      label: 'PERFORMANCE',
    },
  ];
  return (
    <>
      <LandingGrid>
        {landingLinks.map((image, index) => (
          <Link
            key={index}
            to={image.to}
            onClick={() => {
              setPage(image.pageKey); // update the page state for gallery filtering
            }}
            style={{ position: 'relative', display: 'block' }} // relative parent for Label
          >
            <ImageWrapper>
              <StyledImage src={image.src} alt={image.alt} />
              <Label>
                <h1>{image.label}</h1>
              </Label>
            </ImageWrapper>
          </Link>
        ))}
      </LandingGrid>
    </>
  );
}

export default Landing;
