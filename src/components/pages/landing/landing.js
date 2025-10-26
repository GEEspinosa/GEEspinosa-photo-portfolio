import { Link } from 'react-router-dom';
import { LandingGrid, StyledImage } from './styled.landing';

function Landing({ imageClickHandler, setPage, pageAlbum, page }) {
  const landingLinks = [
    {
      src: '/images/gabi_instax_bryan2.webp',
      alt: 'test',
      to: '/location',
      pageKey: 'location',
    },
    {
      src: '/images/gabi_instax_bryan2.webp',
      alt: 'test',
      to: '/people',
      pageKey: 'people',
    },
    {
      src: '/images/gabi_instax_bryan2.webp',
      alt: 'test',
      to: '/impression',
      pageKey: 'impression',
    },
    {
      src: '/images/gabi_instax_bryan2.webp',
      alt: 'test',
      to: '/performance',
      pageKey: 'performance',
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
          >
            <StyledImage src={image.src} alt={image.alt} />
          </Link>
        ))}
      </LandingGrid>
    </>
  );
}

export default Landing;
