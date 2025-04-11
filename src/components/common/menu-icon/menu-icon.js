import React from "react";
import { MenuIconStyled } from "./styled.menu-icon";

function MenuIcon({ open, setOpen }) {
  return (
    <>
      <MenuIconStyled onClick={() => setOpen(!open)} open={open} >
        <div data-testid="menu-icon-test"/>
        <div data-testid="menu-icon-test"/>
        <div data-testid="menu-icon-test"/>
      </MenuIconStyled>
    </>
  );
}

export { MenuIcon };
