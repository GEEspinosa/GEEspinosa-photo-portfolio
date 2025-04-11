import React from 'react';
import { StyledOpenMenu, StyledOpenMenuLink } from './styled.open-menu';
import { linkArray } from '../../../constants/linkArray';
import { scrollToTop } from '../../../utils/utils';

function OpenMenu({ open, setOpen, setPage }) {
  function clickHandler(page) {
    setOpen(!open);
    setPage(page);
    scrollToTop()
  }

  return (
    <>
      <StyledOpenMenu open={open} role = 'navigation'>
        <div>
          {linkArray.map(link => {
            return (
              <StyledOpenMenuLink
                key={link.pageString}
                to={link.params}
                onClick={() => clickHandler(link.pageString)}
              >
                {link.name}
              </StyledOpenMenuLink>
            );
          })}
          <StyledOpenMenuLink to="/about" onClick={() => setOpen(!open)}>
            About
          </StyledOpenMenuLink>
        </div>
      </StyledOpenMenu>
    </>
  );
}

export { OpenMenu };
