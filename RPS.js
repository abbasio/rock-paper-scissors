/* COMPUTER SELECTION */

const rps = ["rock", "paper", "scissors"];

function computerPlay(arr) {
    console.log(arr[Math.floor(Math.random() * arr.length)]);
}

computerPlay(rps);