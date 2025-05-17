import GalleryPage from '../../common/gallery/gallery';

function Landing({ imageClickHandler, pageAlbum, page }) {
  return (
    <GalleryPage
      imageClickHandler={imageClickHandler}
      pageAlbum={pageAlbum}
      page={page}
    />
  );
}

export default Landing;
