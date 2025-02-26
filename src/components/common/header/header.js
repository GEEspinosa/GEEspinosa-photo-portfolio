import React from 'react';
import { Head, Navbar, Title, StyledLink } from './styled.header';
import { MenuIcon } from '../menu-icon/menu-icon';
import { OpenMenu } from '../open-menu/open-menu';

function Header({ open, setOpen, showModal, setPage }) {
  return (
    <Head>
      <Navbar>
        <Title>
          G A B R I E L &nbsp; E S P I N O S A
          <br />P h o t o g r a p h y
        </Title>
        <div className="link-container">
          <StyledLink to="/" className="navbar-link" onClick = {() => setPage('landing')}>
            Home
          </StyledLink>
          <StyledLink to="/location" className="navbar-link" onClick = {() => setPage('location')}>
            Location
          </StyledLink>
          <StyledLink to="/people" className="navbar-link" onClick = {() => setPage('people')}>
            People
          </StyledLink>
          <StyledLink to="/still-life" className="navbar-link" onClick = {() => setPage('stillLife')}>
            Still Life
          </StyledLink>
          <StyledLink to="/performance" className="navbar-link" onClick = {() => setPage('performance')}>
            Performance
          </StyledLink>
          <StyledLink to="/about" className="navbar-link">
            About
          </StyledLink>

          {!showModal && (
            <MenuIcon open={open} setOpen={setOpen} showModal={showModal} />
          )}
          <OpenMenu open={open} setOpen={setOpen} setPage={setPage}/>
        </div>
      </Navbar>
    </Head>
  );
}

export default Header;
