import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';

const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;   
`

const Navbar = styled.nav`
    display: flex;
    justify-content: flex-end;     
`
const Links = styled.ul` 
    list-style-type: none;
    margin: 2px;
    padding: 12px;
    display: flex;   
`
const StyledLink = styled(Link)`
    display: inline;
    text-decoration: none;
    color: inherit;
    padding: 30px;
`

function Header () {

return (
    <>   
        <Title>
            GABRIEL EDUARDO ESPINOSA 
            <br/>
            Photography
        </Title>           
        <Navbar>      
            <Links>              
                <StyledLink to='/' >Home</StyledLink>
                <StyledLink to ='/portfolio'>Portfolio</StyledLink>         
                <StyledLink to ='/about'>About</StyledLink>              
            </Links>
        </Navbar>
    </> 
)
} 

export default Header;