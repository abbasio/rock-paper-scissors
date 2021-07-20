/* COMPUTER SELECTION */

const rps = ["rock", "paper", "scissors"];

function computerPlay(arr) {
    console.log(arr[Math.floor(Math.random() * arr.length)]);
}

const playerSelection = "rock";
const computerSelection = (computerPlay(rps));

function playRound(playerSelection, computerSelection) {
    if (computerSelection === "rock") {
        if (playerSelection.toLowerCase() === "paper") {
            console.log("You win!");
        }
        else if (playerSelection.toLowerCase() === "scissors") {
            console.log("You lose.");
        }
        else console.log("Invalid input");
    }
    if (computerSelection === "paper") {
        if (playerSelection.toLowerCase() === "scissors") {
            console.log("You win!");
        }
        else if (playerSelection.toLowerCase() === "rock") {
            console.log("You lose.");
        }
        else console.log("Invalid input");
    }
    if (computerSelection === "scissors") {
        if (playerSelection.toLowerCase() === "rock") {
            console.log("You win!");
        }
        else if (playerSelection.toLowerCase() === "paper") {
            console.log("You lose");
        }
        else console.log("Invalid input");
    }


}

console.log(playRound("paper", computerSelection));