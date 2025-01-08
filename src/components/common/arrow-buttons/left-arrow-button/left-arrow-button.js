import React from "react";
import { LeftArrowButtonIcon } from "./styled.left-arrow-button";


function LeftArrowButton ({showModal, leftButton, arrowButtonHandler}) {
    return (
        <>
            <LeftArrowButtonIcon showModal={showModal} leftButton ={leftButton} onClick={() => arrowButtonHandler("Left")}>
                <div className="leftArrowIcon" />    
                <div className="leftArrowIcon" />
            </LeftArrowButtonIcon>
        </> 
    )
};

export {LeftArrowButton};