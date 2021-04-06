import React from "react";
import rock from "../images/rock.png";
import paper from "../images/paper.png";
import scissor from "../images/scissors.png";

const ChoiceCard = ({ name, result, choice, score }) => {
  return (
    <div className={`choice-card`}>
      <h2>{name}</h2>
      <img
        src={choice === "rock" ? rock : choice === "paper" ? paper : scissor}
        alt={choice}
      />
      <h3>{result === "Tie" ? "Tie" : result === "win" ? "win" : "Loss"}</h3>
      <h3>{score}</h3>
    </div>
  );
};

export default ChoiceCard;
