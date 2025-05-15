import React from "react";
import { RightArrowButtonIcon } from "./styled.right-arrow-button";
import useWindowSize from "../../../../hooks/useWindowSize";


function RightArrowButton ({showModal, rightButton, arrowButtonHandler, orientationSelected}) {
    const {width} = useWindowSize()
    return (
        <RightArrowButtonIcon width={width} showModal={showModal} rightButton={rightButton} onClick={() => arrowButtonHandler('Right')} orientationSelected={orientationSelected}>
            <div className="RightArrowIcon" />
            <div className="RightArrowIcon" />
        </RightArrowButtonIcon>
    )
};

export {RightArrowButton};
