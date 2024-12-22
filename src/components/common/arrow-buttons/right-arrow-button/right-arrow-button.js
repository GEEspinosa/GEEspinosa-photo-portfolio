import React from "react";
import { RightArrowButtonIcon } from "./styled.right-arrow-button";


function RightArrowButton ({arrowButtonHandler}) {
    return (
        <RightArrowButtonIcon onClick={() => arrowButtonHandler('Right')}>
            <div className="RightArrowIcon" />
            <div className="RightArrowIcon" />
        </RightArrowButtonIcon>
    )
};

export {RightArrowButton};
