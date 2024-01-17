import React from "react";
import "./Court.css";

type CourtProps = {
  playerNames: string[];
};

export const Court = (props: CourtProps) => {
  return (
    <div className="court">
      <div className="player-row">
        {props.playerNames.slice(0, 3).map((name, index) => (
          <div className="player" key={index}>
            {name}
          </div>
        ))}
      </div>
      <div className="player-row bottom-row">
        {props.playerNames.slice(3).map((name, index) => (
          <div className="player" key={index}>
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};
