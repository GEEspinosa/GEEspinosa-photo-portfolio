import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';


const Head = styled.header`
    text-align: center;
    // border: solid;
    // border-color: black;
`


const Title = styled.div`
    display: flex;
    flex: 1;
    margin-top: 6px;
    text-align: left;
    justify-content: start; 

  
`

const Navbar = styled.nav`
    display: flex;
    justify-content: flex-end;
    font-size: 20px; 
    padding: 30px;
    
    // border: solid;
    // border-color: black;
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
        <Head>   
                 
            <Navbar>
            <Title>
                G A B R I E L 
                &nbsp;
                E S P I N O S A 
                <br/>
        
                P h o t o g r a p h y
            </Title>   
                                
                <StyledLink to='/' >Home</StyledLink>
                <StyledLink to ='/portfolio'>Portfolio</StyledLink>         
                <StyledLink to ='/about'>About</StyledLink>              
            </Navbar>
        </Head> 
    </>
)
} 

export default Header;