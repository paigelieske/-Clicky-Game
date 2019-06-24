import React from "react";
import "./style.css";

function Picture (props) {
    return (
    <div className="click-item" role="img" onClick={() => props.clickedPicture(props.id)}>
        <img alt={props.name} src={props.image} />
    </div>
    )
};

export default Picture;