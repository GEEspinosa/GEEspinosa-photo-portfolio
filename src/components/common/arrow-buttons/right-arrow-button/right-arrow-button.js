import { RightArrowButtonIcon } from './styled.right-arrow-button';
import useWindowSize from '../../../../hooks/useWindowSize';

//Dev Note: left arrow button component used for modal viewing mode.
//arrows are constructed from two <div> elements that are styled and responsive
//to state, wrapped as a Styled-Component.

function RightArrowButton({
  showModal,
  rightButton,
  arrowButtonHandler,
  orientationSelected,
}) {
  const { width } = useWindowSize();
  return (
    <RightArrowButtonIcon
      width={width}
      showModal={showModal}
      rightButton={rightButton}
      onClick={() => arrowButtonHandler('Right')}
      orientationSelected={orientationSelected}
    >
      <div className="RightArrowIcon" />
      <div className="RightArrowIcon" />
    </RightArrowButtonIcon>
  );
}

export { RightArrowButton };
