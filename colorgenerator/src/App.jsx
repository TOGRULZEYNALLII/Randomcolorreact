import "./App.css";
import React, { useState } from "react";

function App() {
  const [randomColor, setRandomcolor] = useState("#ffffff");

  function generateColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const code = `#${red.toString(16).padStart(2, "0")}${green
      .toString(16)
      .padStart(2, "0")}${blue.toString(16).padStart(2, "0")}`;
    setRandomcolor(code);
  }
  return (
    <>
      <div className="container-main">
        <div
          className="container"
          style={{ backgroundColor: randomColor }}
        ></div>
        <div className="color">
          <span>{randomColor}</span>
        </div>
        <div className="button-container">
          <button className="button" onClick={generateColor}>
            Genarete color
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
