// interactive.js
export const interactive = () => {
  const buttons = document.querySelectorAll("#rock_game");
  const playerImage = document.querySelector(".player_choice img");
  const computerImage = document.querySelector(".computer_choice img");
  const messageDialogh3 = document.querySelector(".dialog_message h3");
  const messageDialog = document.querySelector(".dialog_message");
  const displayWin = document.querySelector(".display_win p");
  const displayTie = document.querySelector(".display_tie p");
  const displayLose = document.querySelector(".display_lose p");
  const whoWin = document.querySelector(".displayWin");
  const playAgain = document.querySelector("#playAgain");
  const whoWinh2 = document.querySelector(".displayWin h2");

  let playerChoice = "";
  let computerChoice = "";
  const choices = ["rock", "paper", "scissors"];
  const scores = {
    win: 0,
    tie: 0,
    lose: 0,
  };

  // Computer choice
  function getComputerChoice() {
    const computerRand = Math.floor(Math.random() * 3);
    return choices[computerRand];
  }

  // Display the result and update scores
  function getResult(playerChoice, computerChoice) {
    let result = "";

    if (playerChoice === computerChoice) {
      result = "Tie game";
      scores.tie += 1;
      displayTie.textContent = scores.tie;
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      result = "You win";
      scores.win += 1;
      displayWin.textContent = scores.win;
    } else {
      result = "Computer wins";
      scores.lose += 1;
      displayLose.textContent = scores.lose;
    }

    messageDialogh3.textContent = result;
    messageDialog.classList.add("display_message");
    setTimeout(() => {
      messageDialog.classList.remove("display_message");
    }, 2000);
  }

  // Handle button click event
  function handleButtonClick(event) {
    event.stopPropagation();
    event.preventDefault();

    playerChoice = event.currentTarget.value;
    computerChoice = getComputerChoice();

    // Update player and computer choice images
    playerImage.style.display = "block";
    playerImage.setAttribute(
      "src",
      `/images/rock-game/${playerChoice}-emoji.png`
    );

    computerImage.style.display = "block";
    computerImage.setAttribute(
      "src",
      `/images/rock-game/${computerChoice}-emoji.png`
    );

    // Display the result
    getResult(playerChoice, computerChoice);

    //display who wins
    if (scores.win === 5) {
      whoWin.style.display = "flex";
      whoWinh2.innerHTML = "You Win!";
    } else if (scores.lose === 5) {
      whoWin.style.display = "flex";
      whoWinh2.innerHTML = "You lose!";
    }
  }

  // Attach the click event to each button, ensuring no duplicate listeners
  buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
  });
  console.log(playAgain);

  playAgain?.addEventListener("click", () => {
          whoWin.style.display = "none";
    scores.win = 0;
    scores.lose = 0;
    scores.tie = 0;
    displayWin.textContent = scores.win;
    displayLose.textContent = scores.lose;
    displayTie.textContent = scores.tie;

    playerImage.style.display = "none";
    computerImage.style.display = "none";

  });

  // Cleanup function to remove event listeners
  return () => {
    buttons.forEach((button) => {
      button.removeEventListener("click", handleButtonClick);
    });
  };
};




// for console

 // let playGame;
 // let playerChoice;
 // let computerChoice;
 // let result;
 // let validChoice;
 // const choices = ["rock", "paper", "scissors"];

 // function initGame() {
 //   let playGame = confirm("Would you like to play rock, paper, scissors?");
 //   if (playGame) {
 //     return playGame;
 //   } else {
 //     alert("Maybe next time!");
 //   }
 // }

 // function getComputerChoice(choices) {
 //   let computerRand = Math.floor(Math.random() * 3);
 //   let computerChoice = choices[computerRand];
 //   return computerChoice;
 // }

 // function validPlayerChoice() {
 //   let playerChoice = prompt("Enter your choice: rock, paper, scissors");
 //   if (playerChoice || playerChoice === "") {
 //     playerChoice = playerChoice.trim().toLowerCase();
 //     return playerChoice;
 //   }
 // }

 // function getPlayerChoice(playerChoice) {
 //   if (
 //     playerChoice === "rock" ||
 //     playerChoice === "paper" ||
 //     playerChoice === "scissors"
 //   ) {
 //     return playerChoice;
 //   }
 // }

 // function getResult(playerChoice, computerChoice) {
 //   let result =
 //     playerChoice === computerChoice
 //       ? "Tie game!"
 //       : playerChoice === "rock" && computerChoice === "paper"
 //       ? `Player choice: ${playerChoice}\ncomputer choice: ${computerChoice}\ncomputer wins!`
 //       : playerChoice === "paper" && computerChoice === "scissors"
 //       ? `Player choice: ${playerChoice}\ncomputer choice: ${computerChoice}\ncomputer wins!`
 //       : playerChoice === "scissors" && computerChoice === "rock"
 //       ? `Player choice: ${playerChoice}\ncomputer choice: ${computerChoice}\ncomputer wins!`
 //       : `Player choice: ${playerChoice}\ncomputer choice: ${computerChoice}\nplayer wins!`;
 //   alert(result);
 // }

 // playGame = initGame();

 // while (playGame) {
 //   computerChoice = getComputerChoice(choices);
 //   validChoice = validPlayerChoice();

 //   if (validChoice !== "") {
 //     playerChoice = getPlayerChoice(validChoice);
 //     if (playerChoice) {
 //       getResult(playerChoice, computerChoice);
 //     } else {
 //       alert("You change your mind, maybe next time!");
 //       break;
 //     }
 //   } else {
 //     alert("You have to enter rock or paper or scissors");
 //     continue;
 //   }

 //   playGame = confirm("Play Again?");
 //   if (!playGame) {
 //     alert("Ok, thanks for playing.");
 //   }
 //   continue;
 // }
