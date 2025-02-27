//import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Head = styled.header`
  text-align: center;
  padding: 40px;
  height: 120px;
  position: sticky;
  top: 0;
  background: white;
  z-index: 10;

  @media (max-width: 710px) {
    // padding: 10px;
    height: 80px;
    padding: 30px;
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 20px;
  // padding: 20px;

  .link-container {
    .navbar-link {
      position: relative;
      top: 12px;

      @media (max-width: 900px) {
        font-size: 18px;
      }

      &:hover {
        color: red;
      }
    }
  }

  @media (max-width: 710px) {
    .navbar-link {
      display: none;
    }
  }
`;

const Title = styled.div`
  display: flex;
  flex: 1;
  text-align: left;
  justify-content: start;
  // padding-top: 7px;
  // padding-left: 20px;

  @media (max-width: 900px) {
    font-size: 18px;
  }

  @media (max-width: 710px) {
    font-size: 16px;
    padding-left: 0px;
  }

  @media (max-width: 319px) {
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
