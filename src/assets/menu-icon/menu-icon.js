import React from "react";
import { MenuIconStyled } from "./styled.menu-icon";

function MenuIcon () {
 

   function navOverlay () {
    console.log('touchy')
   }

    return (
        <>
            <MenuIconStyled onClick={navOverlay} >
                    <div></div>
                    <div></div>
                    <div></div>    
            </MenuIconStyled>     
        </>
    )
}

export {MenuIcon}