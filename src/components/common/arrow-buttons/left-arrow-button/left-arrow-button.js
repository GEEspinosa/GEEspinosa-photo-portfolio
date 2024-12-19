import React from "react";
import { LeftArrowButtonIcon } from "./styled.left-arrow-button";


function LeftArrowButton ({arrowButtonHandler}) {
    return (
        <>
            <LeftArrowButtonIcon onClick={() => arrowButtonHandler("Left")}>
                <div className="leftArrowIcon" />    
                <div className="leftArrowIcon" />
            </LeftArrowButtonIcon>
        </>
        
    )
};

export {LeftArrowButton};