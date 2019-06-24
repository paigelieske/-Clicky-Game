import React from "react";
import "./style.css";

function Scoreboard (props) {
    return (
    <div className="scoreboard">{props.children}</div>
    )
}

export default Scoreboard;