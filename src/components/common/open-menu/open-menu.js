import React from 'react';
//import {Link} from 'react-router-dom';
import {StyledOpenMenu, StyledOpenMenuLink} from './styled.open-menu'


function OpenMenu ({open}) {

    return (
        <>
            { open && 
                <StyledOpenMenu open = {open}>
                    <StyledOpenMenuLink to="/" className='navbar-link'>Home</StyledOpenMenuLink>
                    <StyledOpenMenuLink to="/portfolio" className='navbar-link'>Portfolio</StyledOpenMenuLink>
                    <StyledOpenMenuLink to="/about" className='navbar-link'>About</StyledOpenMenuLink>
                </StyledOpenMenu> 
            }
        </>
          
    )

}

export {OpenMenu};