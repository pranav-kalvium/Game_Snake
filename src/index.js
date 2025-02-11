import React from "react";
import ReactDOM from "react-dom";
import SnakeGame from "./SnakeGame"; // Import your game component
import "./SnakeGame.css"; // Ensure styles are included

ReactDOM.render(
  <React.StrictMode>
    <SnakeGame />
  </React.StrictMode>,
  document.getElementById("root") // Ensure it matches <div id="root"></div>
);