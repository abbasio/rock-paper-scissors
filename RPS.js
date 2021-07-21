/* COMPUTER SELECTION */



function computerPlay(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const rps = ["rock", "paper", "scissors"];


function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "paper") {
            return "You lose.";
        }
        else if (computerSelection === "scissors") {
            return "You win!";
        }
    }
    if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "rock") {
            return "You win!";
        }
        else if (computerSelection === "scissors") {
            return "You lose.";
        }
    }
    if (playerSelection.toLowerCase() === "scissors") {
        if (computerSelection === "rock") {
            return "You lose.";
        }
        else if (computerSelection === "paper") {
            return "You win!";
        }
    }
    if (playerSelection.toLowerCase() === computerSelection) {
        return "Tie game!";
    }
    if (playerSelection.toLowerCase() != ("rock" || "paper" || "scissors")) {
        return "Invalid input";
    }

}

const playerSelection = window.prompt("Make your selection:");
const computerSelection = (computerPlay(rps));

console.log(playRound(playerSelection, computerSelection));





