import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  LandingGrid,
  StyledImage,
  ImageWrapper,
  Label,
} from './styled.landing';
import imageData from '../../../assets/image-data';
import { labelColors } from '../../../constants/labelColors';

function Landing({ setPage }) {
  const [randomImages, setRandomImages] = useState([]);
  const randomColor =
    labelColors[Math.floor(Math.random() * labelColors.length)];

  useEffect(() => {
    const pageKeys = ['location', 'people', 'impression', 'performance'];

    const selected = pageKeys.map(key => {
      const imagesForPage = imageData.filter(img => key in img.album);
      if (imagesForPage.length === 0) return null;

      const randomImage =
        imagesForPage[Math.floor(Math.random() * imagesForPage.length)];

      return {
        src: randomImage.src || randomImage.image,
        alt: randomImage.alt || key,
        to: `/${key}`,
        pageKey: key,
        label:
          key === 'impression' ? key.toUpperCase() + 's' : key.toUpperCase(),
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
