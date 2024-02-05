import React from "react";
import "./components.css";
import "../../../variables.css";

export default function Image({ path }) {
    return(
        <div className="image-wrapper">
            <img src={path} className="image"/>
            <img src={path} className="blurred-background-image"/>
        </div>

    );
}
