import React, { useState } from "react";
import "./App.css";
import { Court } from "./components/Court/Court";

function App() {
  const initialPlayerNames = [
    "Luis",
    "Joey",
    "Azi",
    "Brynn",
    "Kirsten",
    "Joltebir",
  ];
  const [playerNames, setPlayerNames] = useState(initialPlayerNames);

  const rotatePlayerNames = () => {
    const rotatedNames = [...playerNames];
    const lastPlayerName = rotatedNames.pop() || "";
    rotatedNames.unshift(lastPlayerName);
    setPlayerNames(rotatedNames);
  };

  return (
    <div className="background">
      <div className="net"></div>
      <Court playerNames={playerNames} />
      <div></div>
      <button className="button" onClick={rotatePlayerNames}>
        Rotate Names
      </button>
    </div>
  );
}

export default App;
