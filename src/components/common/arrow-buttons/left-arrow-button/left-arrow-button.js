import React from "react";
import { LeftArrowButtonIcon } from "./styled.left-arrow-button";


function LeftArrowButton ({showModal, leftButton, arrowButtonHandler, portfolioGalleryMidLayout}) {
    return (
        <>
            <LeftArrowButtonIcon showModal={showModal} leftButton ={leftButton} onClick={() => arrowButtonHandler("Left")} portfolioGalleryMidLayout={portfolioGalleryMidLayout}>
                <div className="leftArrowIcon" />    
                <div className="leftArrowIcon" />
            </LeftArrowButtonIcon>
        </> 
    )
};

export {LeftArrowButton};