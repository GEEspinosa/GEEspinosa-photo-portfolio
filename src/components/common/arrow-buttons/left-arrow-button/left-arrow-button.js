import React from 'react';
import { LeftArrowButtonIcon } from './styled.left-arrow-button';
import useWindowSize from '../../../../hooks/useWindowSize';

//Dev Note: left arrow button component used for modal viewing mode. 


function LeftArrowButton({
  showModal,
  leftButton,
  arrowButtonHandler,
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
        orientationSelected={orientationSelected}
      >
        <div className="leftArrowIcon" />
        <div className="leftArrowIcon" />
      </LeftArrowButtonIcon>
    </>
  );
}

export { LeftArrowButton };
