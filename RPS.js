/* COMPUTER SELECTION */

function computerPlay(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const rps = ["rock", "paper", "scissors"];


/* ROUND */

let playerScore = 0;
let computerScore = 0;


function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "paper") {
            computerScore++;
            return `You lose. Paper beats rock. Player: ${playerScore / 2}, Computer: ${computerScore / 2}`;
        }
        else if (computerSelection === "scissors") {
            playerScore++;
            return `You win! Rock beats scissors. Player: ${playerScore / 2}, Computer: ${computerScore / 2}`;
        }
    }
    if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            return `You win! Paper beats rock. Player: ${playerScore / 2}, Computer: ${computerScore / 2}`;
        }
        else if (computerSelection === "scissors") {
            computerScore++;
            return `You lose. Scissors beat paper. Player: ${playerScore / 2}, Computer: ${computerScore / 2}`;
        }
    }
    if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "rock") {
            computerScore++;
            return `You lose. Rock beats scissors. Player: ${playerScore / 2}, Computer: ${computerScore / 2}`;
        }
        else if (computerSelection === "paper") {
            playerScore++;
            return `You win! Scissors beat paper. Player: ${playerScore / 2}, Computer: ${computerScore / 2}`;
        }
    }
    if (playerSelection.toLowerCase() === computerSelection) {
        return `Tie game! You both chose ${computerSelection}. Player: ${playerScore / 2}, Computer: ${computerScore / 2}`;
    }
    if (playerSelection.toLowerCase() != ("rock" || "paper" || "scissors")) {
        return `Invalid input, try again. Player: ${playerScore / 2}, Computer: ${computerScore / 2}`;
    }

}

/* LOOP */

for (let i = 0; i < 5; i++) {
    let computerSelection = (computerPlay(rps));
    let playerSelection = window.prompt("Choose Rock, Paper, or Scissors:");
    playRound(playerSelection, computerSelection);
    document.getElementById("game").innerHTML = playRound(playerSelection,computerSelection);
    if (i == 4) {
        document.getElementById("score").innerHTML = `Complete! Final score - Player: ${playerScore / 2}, Computer: ${computerScore / 2}. Refresh the page to play again.`
    }
}








