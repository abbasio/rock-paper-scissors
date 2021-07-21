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
            return `You lose. Paper beats rock. Player: ${playerScore}, Computer: ${computerScore}`;
        }
        else if (computerSelection === "scissors") {
            playerScore++;
            return `You win! Rock beats scissors. Player: ${playerScore}, Computer: ${computerScore}`;
        }
    }
    if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            return `You win! Paper beats rock. Player: ${playerScore}, Computer: ${computerScore}`;
        }
        else if (computerSelection === "scissors") {
            computerScore++;
            return `You lose. Scissors beat paper. Player: ${playerScore}, Computer: ${computerScore}`;
        }
    }
    if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "rock") {
            computerScore++;
            return `You lose. Rock beats scissors. Player: ${playerScore}, Computer: ${computerScore}`;
        }
        else if (computerSelection === "paper") {
            playerScore++;
            return `You win! Scissors beat paper. Player: ${playerScore}, Computer: ${computerScore}`;
        }
    }
    if (playerSelection.toLowerCase() === computerSelection) {
        return `Tie game! You both chose ${computerSelection}. Player: ${playerScore}, Computer: ${computerScore}`;
    }
    if (playerSelection.toLowerCase() != ("rock" || "paper" || "scissors")) {
        return `Invalid input, try again. Player: ${playerScore}, Computer: ${computerScore}`;
    }

}

/* LOOP */

for (let i = 0; i < 5; i++) {
    let computerSelection = (computerPlay(rps));
    let playerSelection = window.prompt("Choose Rock, Paper, or Scissors:");
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
}








