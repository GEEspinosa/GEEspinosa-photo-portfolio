import GalleryPage from '../../common/gallery/gallery';

function Impression({ imageClickHandler, pageAlbum, page }) {
  return (
    <GalleryPage
      imageClickHandler={imageClickHandler}
      pageAlbum={pageAlbum}
      page={page}
    />
  );
}

export default Impression;
