import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledOpenMenu = styled.nav`
    display: none;

    @media (max-width: 710px) {
    
    display: flex;
    flex-direction: column;
    justify-content; center;
    background: #0D0C1D;
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    right: 0;
    //width: 100%;
    transition: transform 0.3s ease-in-out;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};


    

    &:hover {
        color: #0D0A4D
    }
    }
    

`;

const StyledOpenMenuLink  = styled (Link)`
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-decoration: none;
    transition: color 0.3s linear;
`;

export {StyledOpenMenu, StyledOpenMenuLink};