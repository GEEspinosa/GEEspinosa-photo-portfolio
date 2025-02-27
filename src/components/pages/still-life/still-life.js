import React from "react";
import GalleryPage from "../../common/gallery/gallery";

function StillLife ({imageClickHandler, pageAlbum, page}) {

  return (
    <GalleryPage
      imageClickHandler={imageClickHandler}
      pageAlbum={pageAlbum}
      page={page}
    />
  )
}

export default StillLife