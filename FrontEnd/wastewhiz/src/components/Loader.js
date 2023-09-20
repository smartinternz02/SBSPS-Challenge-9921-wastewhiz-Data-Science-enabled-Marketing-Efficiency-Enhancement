import React from "react";
import { MutatingDots } from "react-loader-spinner";

import "./Loader.css";

const LoadingSpinner = props => {
    return (
        <div className={`${props.asOverlay && "loading-spinner__overlay"}`}>
            <MutatingDots 
                height="100"
                width="100"
                color= '#355E3B' 
                secondaryColor= '#50C878'
                radius='12.5'
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
            <p className="load-text">{props.text}</p>
        </div>
    );
};

export default LoadingSpinner;

