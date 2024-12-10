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
const List = styled.li`
    display: inline;
    text-decoration: none;
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
                
                <List>
                    <Link to='/' style={{textDecoration: 'none', color: "inherit"}}>Home</Link>
                </List> 
                <List>
                    <Link to ='/portfolio' style={{textDecoration: 'none', color: "inherit"}}>Portfolio</Link>
                </List>
                <List>
                    <Link to ='/about' style={{textDecoration: 'none', color: "inherit"}}>About</Link>
                </List>
            </Links>
        </Navbar>
    </> 
)


} 

export default Header;