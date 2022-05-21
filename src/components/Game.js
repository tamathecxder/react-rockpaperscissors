import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Game = ({ myChoice, score, setScore }) => {
  const [computer, setComputer] = useState("");
  const [playerWin, setPlayerWin] = useState("");

  const choices = ["rock", "paper", "scissors"];
  const newComputerPick = () => {
    setComputer(choices[Math.floor(Math.random() * 3)]);
  }

  useEffect(() => {
    newComputerPick();
  }, []);

  const Result = () => {
    if (myChoice === "rock" && computer === "scissors") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === "rock" && computer === "paper") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else if (myChoice === "paper" && computer === "rock") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === "paper" && computer === "scissors") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else if (myChoice === "scissors" && computer === "paper") {
      setPlayerWin("win");
      setScore(score + 1);
    } else if (myChoice === "scissors" && computer === "rock") {
      setPlayerWin("lose");
      setScore(score - 1);
    } else {
      setPlayerWin("draw");
    }
  }

  useEffect(() => {
    Result();
  }, [computer]);

  return (
    <div className='game'>
      <div className="game__yourself">
        <span className="text">You Picked</span>
        <div className={`icon icon--${myChoice} ${playerWin == "win" ? `icon icon--${myChoice}--winner` : ``}`}></div>
      </div>

      {
        playerWin == "win" &&
        <div className="game__play">
          <span className="result-text">You Win!</span>
          <Link to="/" className='play-again' onClick={() => setComputer()}>
            Play Again
          </Link>
        </div>
      }

      {
        playerWin == "lose" &&
        <div className="game__play">
          <span className="result-text">You Lose</span>
          <Link to="/" className='play-again' onClick={() => setComputer()}>
            Play Again
          </Link>
        </div>
      }

      {
        playerWin == "draw" &&
        <div className="game__play">
          <span className="result-text">Draw!</span>
          <Link to="/" className='play-again' onClick={() => setComputer()}>
            Play Again
          </Link>
        </div>
      }

      <div className="game__computer">
        <span className="text">The Computer Picked</span>
        <div className={`icon icon--${computer} ${playerWin == 'lose' ? `icon icon--${computer}--winner` : ``}`}></div>
      </div>
    </div>
  )
}

export default Game

/**
 *  my choice: {myChoice} <br />
    computer choice: {computer} <br />

    Result:
    {playerWin == "win" && <h2>You Win!</h2>}
    {playerWin == "lose" && <h2>You Lose!</h2>}
    {playerWin == "draw" && <h2>Draw!</h2>}

    <Link to="/" onClick={() => setComputer()}>
      Play Again
    </Link>
 */