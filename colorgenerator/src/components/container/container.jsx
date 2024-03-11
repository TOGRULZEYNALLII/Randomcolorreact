import React from "react";
import "../container/container.css";
function Container(props) {
  return (
    <div className="container" style={{ backgroundColor: props.color }}></div>
  );
}

export default Container;
