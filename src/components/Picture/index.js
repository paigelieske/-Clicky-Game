import React from "react";
import "./style.css";

const Picture = props => (
    <div className="click-item" role="img" onClick={() => props.clickedPicture(props.id)}>
        <img alt={props.name} src={props.image} />
    </div>
);

export default Picture;