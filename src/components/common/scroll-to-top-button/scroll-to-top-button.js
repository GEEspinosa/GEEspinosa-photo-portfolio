import { ScrollToTopButtonStyled } from './styled.scroll-to-top-button';
import { scrollToTop } from '../../../utils/utils';

function ScrollToTopButton() {
  return (
    <ScrollToTopButtonStyled data-testid = "scroll-to-top-testID" onClick={scrollToTop}>
      <button>Scroll To Top</button>
    </ScrollToTopButtonStyled>
  );
}

export default ScrollToTopButton;
