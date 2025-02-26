import React from "react";
import { StyledOpenMenu, StyledOpenMenuLink } from "./styled.open-menu";




function OpenMenu({ open, setOpen, setPage}) {  

  function clickHandler(page) {
    setOpen(!open);
    setPage(page)
  }


  return (
    <>
      <StyledOpenMenu open={open}>
        <div>
          <StyledOpenMenuLink to="/" onClick={() => clickHandler('landing')}>
            Home
          </StyledOpenMenuLink>
          <StyledOpenMenuLink to="/location" onClick={() => clickHandler('location')}>
            Location
          </StyledOpenMenuLink>
          <StyledOpenMenuLink to="/people" onClick={() => clickHandler('people')}>
            People
          </StyledOpenMenuLink>
          <StyledOpenMenuLink to="/still-life" onClick={() => clickHandler('stillLife')}>
            Still Life
          </StyledOpenMenuLink>
          <StyledOpenMenuLink to="/performance" onClick={() => clickHandler('performance')}>
            Performance
          </StyledOpenMenuLink>
          <StyledOpenMenuLink to="/about" onClick={() => setOpen(!open)}>
            About
          </StyledOpenMenuLink>
        </div>
      </StyledOpenMenu>
    </>
  );
}

export { OpenMenu };
