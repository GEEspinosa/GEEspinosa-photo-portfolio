import React from "react";
import {Head, Navbar, Title, StyledLink} from './styled.header'

function Header() {
  return (
    <>
      <Head>
        <Navbar>
          <Title>
            G A B R I E L &nbsp; E S P I N O S A
            <br />P h o t o g r a p h y
          </Title>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/portfolio">Portfolio</StyledLink>
          <StyledLink to="/about">About</StyledLink>
        </Navbar>
      </Head>
    </>
  );
}

export default Header;
