import { LeftArrowButtonIcon } from './styled.left-arrow-button';
import useWindowSize from '../../../../hooks/useWindowSize';

//Dev Note: left arrow button component used for modal viewing mode.
//arrows are constructed from two <div> elements that are styled and responsive 
//to state, wrapped as a Styled-Component.

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
