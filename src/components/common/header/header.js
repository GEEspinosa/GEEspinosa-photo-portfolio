import React from 'react';
import { Head, Navbar, Title, StyledLink } from './styled.header';
import { MenuIcon } from '../menu-icon/menu-icon';
import { OpenMenu } from '../open-menu/open-menu';
import { linkArray } from '../../../constants/linkArray';

function Header({ open, setOpen, showModal, setPage, navClickHander }) {
  return (
    <Head>
      <Navbar>
        <Title>
          G A B R I E L &nbsp; E S P I N O S A
          <br />P h o t o g r a p h y
        </Title>
        <div className="link-container">
          {linkArray.map(link => {
            return (
              <StyledLink
                key={link.pageString}
                to={link.params}
                className="navbar-link"
                onClick={() => navClickHander(link.pageString)}
              >
                {link.name}
              </StyledLink>
            );
          })}
          <StyledLink to="/about" className="navbar-link">
            About
          </StyledLink>

          {!showModal && (
            <MenuIcon open={open} setOpen={setOpen} showModal={showModal} />
          )}
          <OpenMenu open={open} setOpen={setOpen} setPage={setPage} />
        </div>
      </Navbar>
    </Head>
  );
}

export default Header;
