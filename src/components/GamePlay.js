import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const GamePlay = ({ userChoice, userScore, setUserScore }) => {
  const [botChoice, setBotChoice] = useState("");
  const [winner, setWinner] = useState("");

  const botChoosenPick = () => {
    const choices = ["rock", "paper", "scissors"];
    setBotChoice(choices[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    botChoosenPick();
  }, []);

  const Result = () => {
    if (userChoice === "rock" && botChoice === "scissors") {
      setWinner("Win");
      setUserScore(userScore + 1);
    } else if (botChoice === "rock" && userChoice === "scissors") {
      setWinner("Lose");
      setUserScore(userScore - 1);
    } else if (userChoice === "paper" && botChoice === "rock") {
      setWinner("Win");
      setUserScore(userScore + 1);
    } else if (userChoice === "rock" && botChoice === "paper") {
      setWinner("Lose");
      setUserScore(userScore - 1);
    } else if (userChoice === "scissors" && botChoice === "paper") {
      setWinner("Win");
      setUserScore(userScore + 1);
    } else if (userChoice === "paper" && botChoice === "scissors") {
      setWinner("Lose");
      setUserScore(userScore - 1);
    } else {
      setWinner("Draw");
    }
  };

  useEffect(() => {
    Result();
  }, [botChoice]);
  return (
    <div className="game">
      <div className="game__you">
        <span className="text">You choose</span>
        <div className={`icon icon--${userChoice}`}></div>
      </div>
      {winner === "Win" && (
        <div className="result__play">
          <div className="text">You Win</div>
          <Link
            to="/rock-paper-scissor"
            exact
            className="play-again"
            onClick={() => setBotChoice()}
          >
            Play Again
          </Link>
        </div>
      )}
      {winner === "Lose" && (
        <div className="result__play">
          <div className="text">You Loose</div>
          <Link
            to="/rock-paper-scissor"
            className="play-again"
            onClick={() => setBotChoice()}
          >
            Play Again
          </Link>
        </div>
      )}
      {winner === "Draw" && (
        <div className="result__play">
          <div className="text">Draw</div>
          <Link
            to="/rock-paper-scissor"
            className="play-again"
            onClick={() => setBotChoice()}
          >
            Play Again
          </Link>
        </div>
      )}
      <div className="game__comp">
        <span className="text">Computer Choose</span>
        <div className={`icon icon--${botChoice}`}></div>
      </div>
    </div>
  );
};

export default GamePlay;
