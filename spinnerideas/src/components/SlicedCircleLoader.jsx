import React from "react";
import "./Spinner.css";

const SlicedCircleLoader = () => {
    return (
        <div className="slicedCircleContainer">
            <div className="slicedCircleLoader-Outer"></div> 
            <div className="slicedCircleLoader-Inner1"></div> 
            <div className="slicedCircleLoader-Inner2"></div> 
        </div>
    )
}

export default SlicedCircleLoader;