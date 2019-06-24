import React from "react";
import "./style.css";

function Message (props) {
    return (
    <div className="message">{props.children}</div>
    )
}

export default Message;