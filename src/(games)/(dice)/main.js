const interactive = () => {
  //player 1
  const buttons = document.querySelectorAll("button");
  const player1Score = document.querySelector("#player1Score");
  const player1DiceImage = document.querySelector(".img1");

  //player2
  const player2Score = document.querySelector("#player2Score");
  const player2DiceImage = document.querySelector(".img2");

  // message
  const message = document.querySelector(".displayMessage");

  let buttonValue;
  let player1Number;
  let player2Number;
  let player1TotalScore = 0;
  let player2TotalScore = 0;
  const WINNER_SCORE = 5;
  let playerTurn = true;

  const chooseRandomNumber = (buttonValue) => {
    let randomNumber = Math.random();
    randomNumber = Math.floor(randomNumber * 6) + 1;
    let displayImage = "images/dice-game/dice" + randomNumber + ".png";
    if (buttonValue === "player1") {
      player1DiceImage.setAttribute("src", displayImage);
    } else {
      player2DiceImage.setAttribute("src", displayImage);
    }
    return randomNumber;
  };

  const showScore = (player1, player2) => {
    if (player1 > player2) {
      player1TotalScore = parseInt(player1Score.textContent) + 1;
      player1Score.innerHTML = player1TotalScore;
    } else if (player2 > player1) {
      player2TotalScore = parseInt(player2Score.textContent) + 1;
      player2Score.innerHTML = player2TotalScore;
    } else {
      message.innerHTML = "Draw!";
      message.classList.add("show");
      setTimeout(() => {
        message.classList.remove("show");
      }, 2000);
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    //get value of button
    buttonValue = event.target.dataset.value;
    //get the button that was clicked
    const button = event.target;
    // Disable both buttons temporarily to prevent multiple clicks
    buttons.forEach((btn) => {
      btn.disabled = true;
    });

    if (buttonValue === "player1" && playerTurn) {
      player1Number = chooseRandomNumber(buttonValue);
      playerTurn = false;
      button.classList.add("btnDisable");
      button.style.pointerEvents = "none"; // Prevent hover actions
    } else {
      player2Number = chooseRandomNumber(buttonValue);
      playerTurn = true;
      button.classList.add("btnDisable");
      button.style.pointerEvents = "none"; // Prevent hover actions
    }

    if (player1Number && player2Number) {
      showScore(player1Number, player2Number);

      setTimeout(() => {
        player1DiceImage.setAttribute("src", "images/dice-game/dice6.png");
        player2DiceImage.setAttribute("src", "images/dice-game/dice6.png");
        player1Number = 0;
        player2Number = 0;
        buttons.forEach((btn) => {
          btn.disabled = false;
          btn.classList.remove("btnDisable");
            btn.style.pointerEvents = "auto";

        });
      }, 3000);
    } else {
      // Re-enable the button for the next player's turn
      setTimeout(() => {
        buttons.forEach((btn) => {
          if (
            (playerTurn && btn.dataset.value === "player1") ||
            (!playerTurn && btn.dataset.value === "player2")
          ) {
            btn.disabled = false;
            btn.classList.remove("btnDisable");
              btn.style.pointerEvents = "auto";

          }
        });
      }, 500);
    }

    if (
      player1TotalScore === WINNER_SCORE ||
      player2TotalScore === WINNER_SCORE
    ) {
      if (player1TotalScore === WINNER_SCORE) {
        message.innerHTML = "🚩Player 1 wins!";
      } else if (player2TotalScore === WINNER_SCORE) {
        message.innerHTML = "🚩Player 2 wins!";
      }
      player1TotalScore = 0;
      player2TotalScore = 0;
      player1Score.innerHTML = player1TotalScore;
      player2Score.innerHTML = player2TotalScore;

      message.classList.add("show");

      setTimeout(() => {
        message.classList.remove("show");
      }, 2000);
    }
  };
  // handle player1 button
  buttons.forEach((button) => {
    button.addEventListener("click", handleClick);
  });

  // clean event listener
  return () => {
    buttons.forEach((button) => {
      button.removeEventListener("click", handleClick);
      button.disabled = false;
    });
  };
};

export default interactive;
