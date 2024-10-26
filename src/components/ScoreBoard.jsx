import React from "react";

const ScoreBoard = ({ score, level, timeLeft }) => {
  return (
    <div>
      <h3>Score: {score}</h3>
      <h3>Level: {level}</h3>
      <h3>Time Left: {timeLeft} seconds</h3>
    </div>
  );
};

export default ScoreBoard;
