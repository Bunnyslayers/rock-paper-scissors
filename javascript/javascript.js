
let playerScore = 0;
let computerScore = 0;


const computerChoice = getComputerChoice();

const playerWon = "Hell yeah, you won . . . ";
const computerWon = "Damn you lost . . . ";
const playersTied = "Damn yall tied . . . ";


function getComputerChoice(random) {
    random = Math.floor( Math.random() * 3) + 1;
        
    if (random === 1) {
        return "rock";
    } else if (random === 2) {
        return "paper";
    } else ( random === 3) 
        return "scissors";

}



function singleGame () {

    var playerSelection = prompt("Chose your fighter . . . rock, paper , scissors!").toLowerCase();

    if ((playerSelection === "rock") && (computerChoice === "scissors") || 
    (playerSelection === "scissors") && (computerChoice === "paper") || 
    (playerSelection === "paper") && (computerChoice === "rock"))  {

        playerScore += 1;
        return playerWon + playerSelection + " beat  " + computerChoice + ".";
    } else if ( (playerSelection === "rock") && (computerChoice === "paper") ||
     (playerSelection === "scissors") && (computerChoice === "rock") ||
     (playerSelection === "paper") && (computerChoice === "scissors"))  {

        computerScore += 1;
        return computerWon + computerChoice + " beats " + playerSelection  + "."
     } else  
        return playersTied
     



}



