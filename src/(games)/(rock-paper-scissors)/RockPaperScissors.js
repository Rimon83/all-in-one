import React, { useEffect } from "react";
import "./RockPaperScissors.css";
import {interactive} from "./main";

const RockPaperScissors = () => {
  useEffect(() => {

    const cleanup = interactive();

    // Cleanup the event listeners
    return () => {
      cleanup();
    };
  }, []);
  return (
    <section className="section_container">
      {/* display who wins */}
      <div className="displayWin">
        <h2></h2>
        <div>
          <button id="playAgain">Play Again</button>
        </div>

      </div>
      <div className="dialog_message">
        <h3></h3>
      </div>
      <h1>Rock Paper Scissors</h1>
      <div className="text_container">
        <h3>
          To begin, select a gesture below to start playing Rock, Paper,
          Scissors.
        </h3>
      </div>
      <div className="btn_container">
        <button id="rock_game" value="rock">
          <img src="/images/rock-game/rock-emoji.png" alt="rock emoji" />
        </button>
        <button id="rock_game" value="paper">
          <img src="/images/rock-game/paper-emoji.png" alt="paper emoji" />
        </button>
        <button id="rock_game" value="scissors">
          <img
            src="/images/rock-game/scissors-emoji.png"
            alt="scissors emoji"
          />
        </button>
      </div>

      {/* display player and computer choices */}
      <div className="display_choice">
        <div className="player_choice">
          <h3>You</h3>
          <img src="" alt="" />
        </div>

        <div className="computer_choice">
          <h3>Computer</h3>
          <img src="" alt="" />
        </div>
      </div>

      {/* display the result */}
      <div className="display_result">
        <div className="display_win">
          <h4>Win: </h4>
          <p>0</p>
        </div>

        <div className="display_tie">
          <h4>Tie: </h4>
          <p>0</p>
        </div>

        <div className="display_lose">
          <h4>Lose: </h4>
          <p>0</p>
        </div>
      </div>
    </section>
  );
};

export default RockPaperScissors;
