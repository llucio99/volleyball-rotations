import React, { useState } from "react";
import "./App.css";
import { Court } from "./components/Court/Court";

function App() {
  const [inputValues, setInputValues] = useState(Array(6).fill(""));
  const [playerNames, setPlayerNames] = useState<string[]>([]);

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = event.target.value;
    setInputValues(newInputValues);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setPlayerNames(inputValues);
  };

  const rotatePlayerNames = () => {
    const rotatedNames = [...playerNames];
    const lastPlayerName = rotatedNames.pop() || "";
    rotatedNames.unshift(lastPlayerName);
    setPlayerNames(rotatedNames);
  };

  return (
    <div className="background">
      <form className="form" onSubmit={handleSubmit}>
      <h1> players </h1>
      <br></br>
        {inputValues.map((value, index) => (
          <input
            className="input"
            key={index}
            value={value}
            onChange={(event) => handleInputChange(index, event)}
          />
        ))}
        <button type="submit">Submit Names</button>
      </form>
      <div className="net"></div>
      <Court playerNames={playerNames} />
      <button className="button" onClick={rotatePlayerNames}>
        Rotate Names
      </button>
      <div></div>
    </div>
  );
}

export default App;
