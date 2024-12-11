import React from "react";
//import styled from "styled-components";
//import {Link} from 'react-router-dom';
import {Head, Navbar, Title, StyledLink} from './styled.header';
import {MenuIcon} from '../menu-icon/menu-icon';
import {OpenMenu} from '../open-menu/open-menu';








function Header({open, setOpen}) {

  
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
          
          <MenuIcon 
            className = 'testers'
            open = {open}
            setOpen = {setOpen}
          />
          <OpenMenu  open = {open}/>
           

          
         
          
            
          
        </Navbar>
        
        
      </Head>
    </>
  );
}

export default Header;
