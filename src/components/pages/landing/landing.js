import { Link } from 'react-router-dom';
import { LandingGrid, StyledImage, Label } from './styled.landing';

function Landing({ setPage }) {
  const landingLinks = [
    {
      src: '/images/gabi_instax_bryan2.webp',
      alt: 'test',
      to: '/location',
      pageKey: 'location',
      label: 'LOCATION',
    },
    {
      src: '/images/gabi_instax_bryan2.webp',
      alt: 'people',
      to: '/people',
      pageKey: 'people',
      label: 'PEOPLE',
    },
    {
      src: '/images/gabi_instax_bryan2.webp',
      alt: 'impression',
      to: '/impression',
      pageKey: 'impression',
      label: 'IMPRESSION',
    },
    {
      src: '/images/gabi_instax_bryan2.webp',
      alt: 'impression',
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
            <StyledImage src={image.src} alt={image.alt} />
            <Label>
              <h1>{image.label}</h1>
            </Label>
          </Link>
        ))}
      </LandingGrid>
    </>
  );
}

export default Landing;
