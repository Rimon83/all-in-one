import React, { useEffect } from 'react'
import "./Dice.css"
import interactive from "./main"

const Dice = () => {
 useEffect(()=>{
  const clean = interactive()
  return () => {
   clean()
  }
 },[])
  return (
    <>
      <section className="section_container">
        <h1>Dice Game</h1>
      </section>
      <section className="dice_section">
       <div className="displayMessage">message</div>
        <div className="score">
          <h4>
            Player1: <pan id="player1Score">0</pan>{" "}
          </h4>
          <h4>
            Player2: <span id="player2Score">0</span>
          </h4>
        </div>

        <div className="dice_container">
          <div className="dice">
            <p>Player 1</p>
            <div className="img_container">
              <img
                className="img1"
                src="images/dice-game/dice6.png"
                alt="dice"
              />
            </div>
            <button id="player1" className="player-btn" data-value="player1">
              Player 1
            </button>
          </div>
          <div className="dice">
            <p>Player 2</p>
            <div className="img_container">
              <img
                className="img2"
                src="images/dice-game/dice6.png"
                alt="dice"
              />
            </div>
            <button id="player2" className="player-btn" data-value="player2">
              Player 2
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dice