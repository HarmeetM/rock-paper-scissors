const ROCK = "rock";
const PAPER = "paper";
const SCISSOR = "scissors";
const WIN = "You win";
const LOSE = "You lose";
const DRAW = "It's a draw";
choices = [ROCK, PAPER, SCISSOR];

function computerPlay() {
    let result = choices[Math.floor(Math.random() * choices.length)];
    return result;
}

let compChoice = computerPlay();

function humanPlay() {
    let playerChoice = prompt("Enter your choice");
    if (playerChoice.toLowerCase() == "rock"){
        return ROCK;
    }
    else if (playerChoice.toLowerCase() == "paper"){
        return PAPER;
    }
    else if (playerChoice.toLowerCase() == "scissors") {
        return SCISSOR;
    }
}

let humanChoice = humanPlay();

let giveMeFormula = playRound(humanChoice, compChoice);

function playRound(humanChoice, compChoice){
    if (humanChoice == ROCK && compChoice == SCISSOR) {
        let winner = WIN;
        return winner;
    }
    else if (humanChoice == ROCK && compChoice == PAPER) {
        let winner = LOSE;
        return winner;
    }
    else if (humanChoice == ROCK && compChoice == ROCK) {
        let winner = DRAW;
        return winner;
    }
    else if (humanChoice == PAPER && compChoice == SCISSOR) {
        let winner = LOSE;
        return winner;
    }
    else if (humanChoice == PAPER && compChoice == PAPER) {
        let winner = DRAW;
        return winner;
    }
    else if (humanChoice == PAPER && compChoice == ROCK) {
        let winner = WIN;
        return winner;
    }
    else if (humanChoice == SCISSOR && compChoice == SCISSOR) {
        let winner = DRAW;
        return winner;
    }
    else if (humanChoice == SCISSOR && compChoice == PAPER) {
        let winner = LOSE;
        return winner;
    }
    else if (humanChoice == SCISSOR && compChoice == ROCK) {
        let winner = WIN;
        return winner;
    }

}

console.log(giveMeFormula);
