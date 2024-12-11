import React from "react";
import { MenuIconStyled } from "./styled.menu-icon";
//import { OpenMenu } from '../open-menu/open-menu'

function MenuIcon ({open, setOpen}) {
 

   

    return (
        <>


          
                <MenuIconStyled onClick={() => setOpen(!open)} open={open} >
                    <div/>
                    <div/>
                    <div/>  
                </MenuIconStyled> :
                
        
        

            {/* <MenuIconStyled onClick={() => setOpen(!open)} open={open} >
                {open ? 
                    <OpenMenu open = {open}/> : 
                        <>
                            <div/>
                            <div/>
                            <div/>  
                        </> 
                }
                
            </MenuIconStyled> */}
            
        </>
    )
}

export {MenuIcon}