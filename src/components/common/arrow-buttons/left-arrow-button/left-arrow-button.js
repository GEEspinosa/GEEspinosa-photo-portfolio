import React from 'react';
import { LeftArrowButtonIcon } from './styled.left-arrow-button';
import useWindowSize from '../../../../hooks/useWindowSize';

function LeftArrowButton({
  showModal,
  leftButton,
  arrowButtonHandler,
  portfolioGalleryMidLayout,
  orientationSelected,
}) {
  const { width } = useWindowSize();
  return (
    <>
      <LeftArrowButtonIcon
        width={width}
        showModal={showModal}
        leftButton={leftButton}
        onClick={() => arrowButtonHandler('Left')}
        portfolioGalleryMidLayout={portfolioGalleryMidLayout}
        orientationSelected={orientationSelected}
      >
        <div className="leftArrowIcon" />
        <div className="leftArrowIcon" />
      </LeftArrowButtonIcon>
    </>
  );
}

export { LeftArrowButton };
