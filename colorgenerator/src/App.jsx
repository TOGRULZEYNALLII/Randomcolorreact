import "./App.css";
import React, { useState } from "react";
import Button from "./components/Button/button.jsx";
import Text from "./components/Colortext/text.jsx";
import Container from "./components/container/container.jsx";
import Copy from "./components/copy/copy.jsx";
function App() {
  const [randomColor, setRandomcolor] = useState("#ffffff");
  const [isCopied, setIsCopied] = useState(false);
  function copyColorcode() {
    navigator.clipboard.writeText(randomColor).then(() => {
      setIsCopied(true);
    });
  }

  function generateColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const code = `#${red.toString(16).padStart(2, "0")}${green
      .toString(16)
      .padStart(2, "0")}${blue.toString(16).padStart(2, "0")}`;
    setRandomcolor(code);
    setIsCopied(false);
  }
  return (
    <>
      <div className="container-main">
        <Container color={randomColor} />
        <div className="color">
          <Text colortext={randomColor} />
        </div>
        <div className="button-container">
          <Copy text="copy" onClick={copyColorcode} />
        </div>
        <div className="button-container">
          <Button onClick={generateColor} text="generate color" />
        </div>
      </div>
    </>
  );
}

export default App;
