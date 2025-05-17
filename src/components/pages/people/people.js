import GalleryPage from '../../common/gallery/gallery';

function People({ imageClickHandler, pageAlbum, page }) {
  return (
    <GalleryPage
      imageClickHandler={imageClickHandler}
      pageAlbum={pageAlbum}
      page={page}
    />
  );
}

export default People;
