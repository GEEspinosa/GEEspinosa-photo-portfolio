//import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Head = styled.header`
  text-align: center;
  padding: 20px;
  

    @media (max-width: 710px ){
      padding: 10px
    }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
  padding: 20px;

    @media (max-width: 710px ){
      .navbar-link {display: none}
    }
`;

const Title = styled.div`
  display: flex;
  flex: 1;
  text-align: left;  
  justify-content: start;
  padding-top: 7px;
  padding-left: 20px;

    @media (max-width: 710px ){
      font-size: 18px;
      padding-left: 0px;
    }  
`;

const StyledLink = styled(Link)`
  display: inline;
  text-decoration: none;
  color: inherit;
  padding: 30px;
`;

export {
    Head,
    Navbar,
    Title,
    StyledLink,
}