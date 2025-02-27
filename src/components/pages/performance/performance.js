import React from 'react';
import GalleryPage from '../../common/gallery/gallery';

function Performance({ imageClickHandler, pageAlbum, page, isLoaded }) {
  return (
    <GalleryPage
      imageClickHandler={imageClickHandler}
      pageAlbum={pageAlbum}
      page={page}
      isLoaded={isLoaded}
    />
  );
}

export default Performance;
