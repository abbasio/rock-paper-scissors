//---------COMPUTER SELECTION

const rps = ["rock", "paper", "scissors"];

function computerPlay(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

//---------PLAYER SELECTION

let input = document.querySelectorAll("input");

input.forEach((input) => {
    input.addEventListener("click", () =>{
        playerSelection = input.alt;
        computerSelection = (computerPlay(rps));
        playRound(playerSelection, computerSelection);
    });
});

//---------SCORE AND RESET

let playerScore = 0;
let computerScore = 0;

function restart(parent) {
    playerScore = 0;
    computerScore = 0;
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//---------GAME

function playRound(playerSelection, computerSelection) {

    const score = document.querySelector('#score');
    const updateScore = document.createElement('div');
    const finalScore = document.createElement('p');
    updateScore.classList.add('scoreLine');
 
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerScore++;
            updateScore.textContent = `You lose. Paper beats rock. Player: ${playerScore}, Computer: ${computerScore}`;
            updateScore.style.color = "red";
            
            
        }
        else if (computerSelection === "scissors") {
            playerScore++;
            updateScore.textContent = `You win! Rock beats scissors. Player: ${playerScore}, Computer: ${computerScore}`;
            updateScore.style.color = "green";
            
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerScore++;
            updateScore.textContent = `You win! Paper beats rock. Player: ${playerScore}, Computer: ${computerScore}`;
            updateScore.style.color = "green";
        }
        else if (computerSelection === "scissors") {
            computerScore++;
            updateScore.textContent = `You lose. Scissors beat paper. Player: ${playerScore}, Computer: ${computerScore}`;
            updateScore.style.color = "red";
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore++;
            updateScore.textContent = `You lose. Rock beats scissors. Player: ${playerScore}, Computer: ${computerScore}`;
            updateScore.style.color = "red";
        }
        else if (computerSelection === "paper") {
            playerScore++;
            updateScore.textContent = `You win! Scissors beat paper. Player: ${playerScore}, Computer: ${computerScore}`;
            updateScore.style.color = "green";
        }
    }
    if (playerSelection === computerSelection) {
        updateScore.textContent = `Tie game! You both chose ${computerSelection}. Player: ${playerScore}, Computer: ${computerScore}`;
        
    }
    
    score.appendChild(updateScore);

//---------GAME OVER

    if ((playerScore === 5) || (computerScore === 5)) {
       
        score.appendChild(updateScore);
        if (confirm(`Game over!\nFinal Score - Player: ${playerScore}, Computer: ${computerScore}\nPress Cancel to end game, or press OK to restart`)) {
            restart(score);
         }
        else {
            if (playerScore === 5) {
                finalScore.textContent = "You won! Congratulations!"
                finalScore.style.color = "green"
                finalScore.style.scale = 2;
            }
            if (computerScore === 5) {
                finalScore.textContent = "You lost. Better luck next time!"
                finalScore.style.color = "red"
                finalScore.style.scale = 2;
            }
            
            input.forEach ((input) => {
                input.disabled = true;
            });
            score.appendChild(finalScore);
        }
        
    }
   
}











