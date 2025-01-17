import React from "react";
import { RightArrowButtonIcon } from "./styled.right-arrow-button";


function RightArrowButton ({showModal, rightButton, arrowButtonHandler, portfolioGalleryMidLayout}) {
    return (
        <RightArrowButtonIcon showModal={showModal} rightButton={rightButton} onClick={() => arrowButtonHandler('Right')} portfolioGalleryMidLayout = {portfolioGalleryMidLayout}>
            <div className="RightArrowIcon" />
            <div className="RightArrowIcon" />
        </RightArrowButtonIcon>
    )
};

export {RightArrowButton};
