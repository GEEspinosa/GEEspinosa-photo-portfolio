import { MenuIconStyled } from "./styled.menu-icon";

function MenuIcon({ open, setOpen }) {
  return (
    <>
      <MenuIconStyled onClick={() => setOpen(!open)} open={open} className={open ? 'open' : ''} role='button'>
        <div data-testid = 'menu-icon-test'/>
        <div data-testid = 'menu-icon-test'/>
        <div data-testid = 'menu-icon-test'/>
      </MenuIconStyled>
    </>
  );
}

export { MenuIcon };
