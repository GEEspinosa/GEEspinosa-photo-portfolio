import React from 'react';
import {Link} from 'react-router-dom';
import {StyledOpenMenu} from './styled.open-menu'


function OpenMenu ({open}) {

    return (
        <>
            <StyledOpenMenu open = {open}>
                <Link to="/" className='navbar-link'>Home</Link>
                <Link to="/portfolio" className='navbar-link'>Portfolio</Link>
                <Link to="/about" className='navbar-link'>About</Link>
            </StyledOpenMenu>
        </>
          
    )

}

export {OpenMenu};