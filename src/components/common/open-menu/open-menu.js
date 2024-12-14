import React from 'react';
import {StyledOpenMenu, StyledOpenMenuLink} from './styled.open-menu'

function OpenMenu ({open, setOpen}) {
    return (
        <>         
                <StyledOpenMenu open = {open}>
                        <div>
                        <StyledOpenMenuLink to="/" onClick = {() => setOpen(!open)}>Home</StyledOpenMenuLink>
                        <StyledOpenMenuLink to="/portfolio" onClick = {() => setOpen(!open)}>Portfolio</StyledOpenMenuLink>
                        <StyledOpenMenuLink to="/about" onClick = {() => setOpen(!open)}>About</StyledOpenMenuLink>
                        </div>
                </StyledOpenMenu>          
        </>      
    )
}

export {OpenMenu};