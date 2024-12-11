import React from "react";
import { MenuIconStyled } from "./styled.menu-icon";

function MenuIcon ({open, setOpen}) {
 

   

    return (
        <>
            <MenuIconStyled onClick={() => setOpen(!open)} >
                    <div/>
                    <div/>
                    <div/>    
            </MenuIconStyled>     
        </>
    )
}

export {MenuIcon}