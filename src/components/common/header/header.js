import React from "react";
import {Head, Navbar, Title, StyledLink} from './styled.header';
import {MenuIcon} from '../../../assets/menu-icon/menu-icon';

function Header() {

  function navOverlay(){
    console.log('touchy')
  }


  return (
    <>
      <Head>
        <Navbar>
          <Title>
            G A B R I E L &nbsp; E S P I N O S A
            <br />P h o t o g r a p h y
          </Title>
          
          <StyledLink to="/" className='navbar-link'>Home</StyledLink>
          <StyledLink to="/portfolio" className='navbar-link'>Portfolio</StyledLink>
          <StyledLink to="/about" className='navbar-link'>About</StyledLink>
          
          <MenuIcon className = 'testers'>
            
          </MenuIcon>
         
          
            
          
        </Navbar>
        
        
      </Head>
    </>
  );
}

export default Header;
