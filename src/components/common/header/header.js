import { Head, Navbar, Title, StyledLink } from './styled.header';
import { MenuIcon } from '../menu-icon/menu-icon';
import { OpenMenu } from '../open-menu/open-menu';
import { linkArray } from '../../../constants/linkArray';
import useWindowSize from '../../../hooks/useWindowSize';

function Header({ open, setOpen, showModal, page, setPage, navClickHander }) {
    const { width } = useWindowSize();
  return (
    <Head>
      <Navbar>
        {width >= 300 ? 
        <Title>
          G A B R I E L &nbsp; E S P I N O S A
          <br />P h o t o g r a p h y
        </Title> : <Title>
          GABRIEL ESPINOSA <br />Photography 
        </Title>}
        {page !== 'landing' &&
        <div className="link-container">
          {linkArray.map(link => {
            return (
              <StyledLink
                key={link.pageString}
                to={link.params}
                className="navbar-link"
                onClick={() => navClickHander(link.pageString)}
                aria-label={link.name}
              >
                {link.name}
              </StyledLink>
            );
          })}
          <StyledLink to="/about" className="navbar-link">
            About
          </StyledLink>
        </div>}
      </Navbar>
      {!showModal && (
        <MenuIcon page={page} open={open} setOpen={setOpen} showModal={showModal} />
      )}
      <OpenMenu open={open} setOpen={setOpen} setPage={setPage} />
    </Head>
  );
}

export default Header;
