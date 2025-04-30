//import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Head = styled.header`
  text-align: center;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  padding: 40px;
  height: 120px;
  position: sticky;
  top: 0;
  background: white;
  z-index: 10;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 20px;
  

  .link-container {
    opacity: 0.7;
    .navbar-link {
      //dev note: not sure if I like the nav links lower
      //position: relative;
      //top: 12px;
  
      @media (max-width: 900px) {
        font-size: 18px;
      }

      &:hover {
        color: red;
      }
    }
  }

  @media (max-width: 1185px) {
    .navbar-link {
      display: none;
    }
  }
`;

const Title = styled.div`
  font-family: 'Poppins', sans-serif;
  opacity: 0.7;
  font-weight: 60;
  font-size: 1rem;
  display: flex;
  flex: 1;
  text-align: left;
  justify-content: start;

  @media (max-width: 900px) {
    font-size: 18px;
  }

  @media (max-width: 400px) {
    font-size: 16px;
  }
  

  @media (max-width: 370px) {
    visibility: hidden;
  }
`;

const StyledLink = styled(Link)`
  display: inline;
  text-decoration: none;
  color: inherit;
  padding: 30px;
`;

export { Head, Navbar, Title, StyledLink };
