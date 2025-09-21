import { Head, Navbar, Title, StyledLink } from './styled.header';
import { MenuIcon } from '../menu-icon/menu-icon';
import { OpenMenu } from '../open-menu/open-menu';
import { linkArray } from '../../../constants/linkArray';

function Header({ open, setOpen, showModal, setPage, navClickHandler }) {
  return (
    <Head>
      <Navbar>
        <Title>
          G A B R I E L &nbsp; E S P I N O S A
          <br />P h o t o g r a p h y
        </Title>
        <nav className="link-container">
          {linkArray.map(({name, pageString, params}) => {
            return (
              <StyledLink
                key={pageString}
                to={params}
                className="navbar-link"
                onClick={() => navClickHandler(pageString)}
              >
                {name}
              </StyledLink>
            );
          })}
          <StyledLink to="/about" className="navbar-link">
            About
          </StyledLink>
        </nav>
      </Navbar>
      {!showModal && (
        <MenuIcon open={open} setOpen={setOpen} showModal={showModal} />
      )}
      <OpenMenu open={open} setOpen={setOpen} setPage={setPage} />
    </Head>
  );
}

export default Header;
