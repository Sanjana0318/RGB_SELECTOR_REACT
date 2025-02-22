import "./App.css";

import { useState } from "react";

function App() {
  const [colors, setColors] = useState([0, 0, 0]);

  const updateColor = () => {
    const [red, green, blue] = colors;
    const selectedColor = `rgb(${red}, ${green}, ${blue})`;
    document.getElementById("redvalue").textContent = red;
    document.getElementById("greenvalue").textContent = green;
    document.getElementById("bluevalue").textContent = blue;
    document.getElementById(
      "redcolor"
    ).style.backgroundColor = `rgb(${red},0,0)`;
    document.getElementById(
      "greencolor"
    ).style.backgroundColor = `rgb(0,${green},0)`;
    document.getElementById(
      "bluecolor"
    ).style.backgroundColor = `rgb(0,0,${blue})`;
    document.getElementById("mixed").style.backgroundColor = selectedColor;
  };

  const increment = (index) => {
    const newColors = [...colors];
    newColors[index] = Math.min(colors[index] + 1, 255);
    setColors(newColors);
    updateColor();
  };

  const decrement = (index) => {
    const newColors = [...colors];
    newColors[index] = Math.max(colors[index] - 1, 0);
    setColors(newColors);
    updateColor();
  };
  return (
    <div className="App">
      <h1>
        <span className="span-red">R</span>
        <span className="span-green">G</span>
        <span className="span-blue">B</span>
        <span> </span>
        Colour Selector
      </h1>
      <div className="total-grid">
        <div className="final" id="mixed"></div>
        <div className="individual">
          <div className="individual-container">
            <div className="individual-color" id="redcolor"></div>
            <div className="set">
              <button
                className="adjust-button minus"
                onClick={() => decrement(0)}
              >
                -
              </button>
              <p className="color-value" id="redvalue">
                0
              </p>
              <button
                className="adjust-button plus"
                onClick={() => increment(0)}
              >
                +
              </button>
            </div>
          </div>
          <div className="individual-container">
            <div className="individual-color" id="greencolor"></div>
            <div className="set">
              <button
                className="adjust-button minus"
                onClick={() => decrement(1)}
              >
                -
              </button>
              <p className="color-value" id="greenvalue">
                0
              </p>
              <button
                className="adjust-button plus"
                onClick={() => increment(1)}
              >
                +
              </button>
            </div>
          </div>
          <div className="individual-container">
            <div className="individual-color" id="bluecolor"></div>
            <div className="set">
              <button
                className="adjust-button minus"
                onClick={() => decrement(2)}
              >
                -
              </button>
              <p className="color-value" id="bluevalue">
                0
              </p>
              <button
                className="adjust-button plus"
                onClick={() => increment(2)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
