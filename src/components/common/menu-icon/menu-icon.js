import { MenuIconStyled } from "./styled.menu-icon";

function MenuIcon({page, open, setOpen }) {
  return (
    <>
      <MenuIconStyled onClick={() => setOpen(!open)} page={page} open={open} className={open ? 'open' : ''} role='button' aria-label='hamburger menu'>
        <div data-testid = 'menu-icon-test'/>
        <div data-testid = 'menu-icon-test'/>
        <div data-testid = 'menu-icon-test'/>
      </MenuIconStyled>
    </>
  );
}

export { MenuIcon };
