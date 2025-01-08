import React from "react";
import { RightArrowButtonIcon } from "./styled.right-arrow-button";


function RightArrowButton ({rightButton, arrowButtonHandler}) {
    return (
        <RightArrowButtonIcon rightButton={rightButton} onClick={() => arrowButtonHandler('Right')}>
            <div className="RightArrowIcon" />
            <div className="RightArrowIcon" />
        </RightArrowButtonIcon>
    )
};

export {RightArrowButton};
