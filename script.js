const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const message = document.querySelector('.message');
let buttons = document.querySelectorAll('.buttons');
let playerCount = document.querySelector('.player-counter');
let computerCount = document.querySelector('.computer-counter');

let playerChoice;

//for (i = 0; i < 5; i++) {

function getComputerChoice() {
    return Math.floor(Math.random() * 3)
}

function computerSelection(computerChoice) {
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

let computerChoice = computerSelection(getComputerChoice())

function playerSelection() {
    //return prompt("Choose rock, paper, or scissors").toLowerCase()
    
}

buttons.forEach((input) => {
    input.addEventListener('click', function () {
        const inputs = input.querySelector("input");
        playerChoice = inputs.alt.toLowerCase();

        playRound(playerChoice, computerSelection(getComputerChoice()));
    })        
    
});

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        message.textContent = `It's a tie!`
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        message.textContent ="You win!";
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        message.textContent ="You lose!";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        message.textContent ="You win!";
    } else if (playerChoice === "scissors" && computerChoice === "rock") {
        message.textContent ="You lose!";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        message.textContent ="You win!";
    } else if (playerChoice === "paper" && computerChoice === "scissors"){
        message.textContent ="You lose!";
    }
    updateCount();
}

function updateCount () {
    if (message.textContent === "You win!") {
        let newPlayerCount = Number(playerCount.textContent)
        newPlayerCount++;
        playerCount.textContent = newPlayerCount;
    } else if (message.textContent === "You lose!") {
        let newComputerCount = Number(computerCount.textContent)
        newComputerCount++
        computerCount.textContent = newComputerCount
    }
}



/* function roundCount() {
    let playerCounter = 0;
    let computerCounter = 0;
    let roundsPlayed = playerCounter + computerCounter;

    if (message.textContent === "You win!") {
        playerCounter++;
    } else if (message.textContent === "You lose!") {
        computerCounter++;
    }
    roundsPlayed++
    return roundsPlayed;
}
//}

let roundCounter = roundCount()

const counter = document.createElement("h2");
counter.textContent = "Rounds Played: " + roundCounter;
document.body.appendChild(counter); */

/* if (playerCounter > computerCounter) {
    console.log("The player has beat the computer")
} else if (playerCounter < computerCounter){
    console.log("The computer has beat the player")
} */




