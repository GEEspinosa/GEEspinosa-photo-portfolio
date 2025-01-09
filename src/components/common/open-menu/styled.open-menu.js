import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledOpenMenu = styled.nav`
  z-index: 2;
  background: gray;
  overflow-x: hidden;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

  div {
    display: flex;
    flex-direction: column;
    margin-top: 6rem;
  }
`;

const StyledOpenMenuLink = styled(Link)`
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: white;
  text-align: center;
  text-decoration: none;
  transition: color 0.3s linear;

  &:hover {
    color: red;
  }
`;

export { StyledOpenMenu, StyledOpenMenuLink };
