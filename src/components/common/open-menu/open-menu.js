import React from "react";
import { StyledOpenMenu, StyledOpenMenuLink } from "./styled.open-menu";

function OpenMenu({ open, setOpen }) {
  return (
    <>
      <StyledOpenMenu open={open}>
        <div>
          <StyledOpenMenuLink to="/" onClick={() => setOpen(!open)}>
            Home
          </StyledOpenMenuLink>
          <StyledOpenMenuLink to="/location" onClick={() => setOpen(!open)}>
            Location
          </StyledOpenMenuLink>
          <StyledOpenMenuLink to="/people" onClick={() => setOpen(!open)}>
            People
          </StyledOpenMenuLink>
          <StyledOpenMenuLink to="/still-life" onClick={() => setOpen(!open)}>
            Still Life
          </StyledOpenMenuLink>
          <StyledOpenMenuLink to="/performance" onClick={() => setOpen(!open)}>
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
