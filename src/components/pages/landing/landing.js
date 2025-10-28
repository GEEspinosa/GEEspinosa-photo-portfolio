// import { Link } from 'react-router-dom';
// import {
//   LandingGrid,
//   StyledImage,
//   ImageWrapper,
//   Label,
// } from './styled.landing';

// function Landing({ setPage }) {
//   const landingLinks = [
//     {
//       src: '/images/bonsai.webp',
//       alt: 'test',
//       to: '/location',
//       pageKey: 'location',
//       label: 'LOCATION',
//     },
//     {
//       src: '/images/tessa_beach.webp',
//       alt: 'people',
//       to: '/people',
//       pageKey: 'people',
//       label: 'PEOPLE',
//     },
//     {
//       src: '/images/faded_mural.webp',
//       alt: 'impression',
//       to: '/impression',
//       pageKey: 'impression',
//       label: 'IMPRESSIONS',
//     },
//     {
//       src: '/images/sean_guitar.webp',
//       alt: 'performance',
//       to: '/performance',
//       pageKey: 'performance',
//       label: 'PERFORMANCE',
//     },
//   ];
//   return (
//     <>
//       <LandingGrid>
//         {landingLinks.map((image, index) => (
//           <Link
//             key={index}
//             to={image.to}
//             onClick={() => {
//               setPage(image.pageKey); // update the page state for gallery filtering
//             }}
//             style={{ position: 'relative', display: 'block' }} // relative parent for Label
//           >
//             <ImageWrapper>
//               <StyledImage src={image.src} alt={image.alt} />
//               <Label>
//                 <h1>{image.label}</h1>
//               </Label>
//             </ImageWrapper>
//           </Link>
//         ))}
//       </LandingGrid>
//     </>
//   );
// }

// export default Landing;



import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  LandingGrid,
  StyledImage,
  ImageWrapper,
  Label,
} from './styled.landing';
import imageData from '../../../assets/image-data';

function Landing({ setPage }) {
  const [randomImages, setRandomImages] = useState([]);

  // Accessible, aesthetic label colors
  const labelColors = [
    '#EAD2AC', // warm beige
    '#D6E4E5', // pale blue-grey
    '#C7B7A3', // muted sand
    '#F3C98B', // soft gold
    '#A2B5BB', // desaturated blue
    '#E8E9EB', // soft off-white
  ];
  const randomColor =
        labelColors[Math.floor(Math.random() * labelColors.length)];

  useEffect(() => {
    const pageKeys = ['location', 'people', 'impression', 'performance'];

    const selected = pageKeys.map((key) => {
      const imagesForPage = imageData.filter((img) => key in img.album);
      if (imagesForPage.length === 0) return null;

      const randomImage =
        imagesForPage[Math.floor(Math.random() * imagesForPage.length)];

      return {
        src: randomImage.src || randomImage.image,
        alt: randomImage.alt || key,
        to: `/${key}`,
        pageKey: key,
        label: key.toUpperCase(),
        color: randomColor,
      };
    });

    setRandomImages(selected.filter(Boolean));
  }, []);

  return (
    <LandingGrid>
      {randomImages.map((image, index) => (
        <Link
          key={index}
          to={image.to}
          onClick={() => setPage(image.pageKey)}
          style={{ position: 'relative', display: 'block' }}
        >
          <ImageWrapper>
            <StyledImage src={image.src} alt={image.alt} />
            <Label style={{ color: image.color }}>
              <h1>{image.label}</h1>
            </Label>
          </ImageWrapper>
        </Link>
      ))}
    </LandingGrid>
  );
}

export default Landing;


