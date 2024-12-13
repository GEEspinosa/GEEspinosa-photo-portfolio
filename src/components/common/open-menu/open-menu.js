import React from 'react';
import {StyledOpenMenu, StyledOpenMenuLink} from './styled.open-menu'

function OpenMenu ({open}) {
    return (
        <>         
                <StyledOpenMenu open = {open}>
                        <div>
                        <StyledOpenMenuLink to="/" >Home</StyledOpenMenuLink>
                        <StyledOpenMenuLink to="/portfolio" >Portfolio</StyledOpenMenuLink>
                        <StyledOpenMenuLink to="/about" >About</StyledOpenMenuLink>
                        </div>
                </StyledOpenMenu>          
        </>      
    )
}

export {OpenMenu};