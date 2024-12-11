import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledOpenMenu = styled.nav`
   

   
    
        display: flex;
        flex-direction: column;
        justify-content; center;
        background: gray;
        height: 100vh;
        text-align: right;
        width: 100%;
        position: absolute;
        index-z: 0;
        top: 0;
        right: 0;
        transition: transform 0.3s ease-in-out;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        
   
    

`;

const StyledOpenMenuLink  = styled (Link)`
    
   
    
    font-size: 1.5rem;
    
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: white;
    text-align: right;
    //z-index: 0;
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
        color: red;
    }


 
    
`;

export {StyledOpenMenu, StyledOpenMenuLink};