import React from "react";
import { LeftArrowButtonIcon } from "./styled.left-arrow-button";


function LeftArrowButton ({leftButton, arrowButtonHandler}) {
    return (
        <>
            <LeftArrowButtonIcon leftButton ={leftButton} onClick={() => arrowButtonHandler("Left")}>
                <div className="leftArrowIcon" />    
                <div className="leftArrowIcon" />
            </LeftArrowButtonIcon>
        </> 
    )
};

export {LeftArrowButton};