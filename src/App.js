import { useState } from "react";
import "./App.css";
// import rock from "./images/rock.png";
// import paper from "./images/paper.png";
// import scissor from "./images/scissors.png";
import ChoiceCard from "./components/ChoiceCard";
let streak = 0;

function App() {
  const shapes = ["rock", "paper", "scissor"];
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [userResult, setUserResult] = useState("Tie");
  const [userScore, setUserScore] = useState(0);
  const [computerResult, setComputerResult] = useState("Tie");
  const [computerScore, setComputerScore] = useState(0);

  const handleClick = (name) => {
    console.log(name);
    setUserChoice(name);
    let computerChoice = shapes[Math.floor(Math.random() * 3)];
    setComputerChoice(computerChoice);

    if (name === computerChoice) {
      setUserResult("Tie");
      setComputerResult("Tie");
      streak = 0;
    } else if (computerChoice === "rock") {
      if (name === "paper") {
        if (streak >= 0) {
          streak++;
        } else {
          streak = 1;
        }
        if (streak === 3) {
          setUserResult("flawless victory");
        } else {
          setUserResult("win");
        }
        setComputerResult("loss");
        setUserScore(userScore + 1);
      } else {
        if (streak <= 0) {
          streak--;
        } else {
          streak = -1;
        }
        if (streak === -3) {
          setComputerResult("flawless victory");
        } else {
          setComputerResult("win");
        }
        setComputerScore(computerScore + 1);
        setUserResult("loss");
        streak--;
      }
    } else if (computerChoice === "paper") {
      if (name === "scissor") {
        if (streak >= 0) {
          streak++;
        } else {
          streak = 1;
        }
        if (streak === 3) {
          setUserResult("flawless victory");
        } else {
          setUserResult("win");
        }
        setComputerResult("loss");
        setUserScore(userScore + 1);
      } else {
        if (streak <= 0) {
          streak--;
        } else {
          streak = -1;
        }
        if (streak === -3) {
          setComputerResult("flawless victory");
        } else {
          setComputerResult("win");
        }

        setComputerScore(computerScore + 1);
        setUserResult("loss");
      }
    } else {
      if (name === "rock") {
        if (streak >= 0) {
          streak++;
        } else {
          streak = 1;
        }
        if (streak === 3) {
          setUserResult("flawless victory");
        } else {
          setUserResult("win");
        }
        setComputerResult("loss");
        setUserScore(userScore + 1);
      } else {
        if (streak <= 0) {
          streak--;
        } else {
          streak = -1;
        }
        if (streak === -3) {
          setComputerResult("flawless victory");
        } else {
          setComputerResult("win");
        }
        setComputerScore(computerScore + 1);
        setUserResult("loss");
      }
    }
  };

  return (
    <div>
      <div className="flex text-center">
        <ChoiceCard
          name="You"
          result={userResult}
          choice={userChoice}
          score={userScore}
        />
        <ChoiceCard
          name="Computer"
          result={computerResult}
          choice={computerChoice}
          score={computerScore}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <button onClick={() => handleClick("rock")}>Rock</button>
        <button onClick={() => handleClick("paper")}>Paper</button>
        <button onClick={() => handleClick("scissor")}>Scissor</button>
      </div>
    </div>
  );
}

export default App;
