import React from "react";
import { RightArrowButtonIcon } from "./styled.right-arrow-button";


function RightArrowButton ({showModal, rightButton, arrowButtonHandler}) {
    return (
        <RightArrowButtonIcon showModal={showModal} rightButton={rightButton} onClick={() => arrowButtonHandler('Right')}>
            <div className="RightArrowIcon" />
            <div className="RightArrowIcon" />
        </RightArrowButtonIcon>
    )
};

export {RightArrowButton};
