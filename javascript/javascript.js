
const choice = prompt("Chose your fighter . . . rock, paper , scissors!").toLowerCase();
const playerSelection = choice;
const computerChoice = getComputerChoice();


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
    if (playerSelection === computerChoice) {
        return "Damn yall tied . . . go ahead and kiss!";
    } else if ((playerSelection === "rock") && (computerChoice === "paper")) {
        return "Damn you lost. . . Paper beats rock buddy!";
    } else if ((playerSelection === "rock") && (computerChoice === "scissors")) {
        return "Hell yeah, you won bitch . . . Rock beats scissors muthafucka!";
    } else if ((playerSelection === "scissors") && (computerChoice === "rock")) {
        return "Damn you lost. . . Rock beats scissors buddy!";
    } else if ((playerSelection === "scissors") && (computerChoice === "paper")) {
        return "Hell yeah, you won bitch . . . Scissors beats paper muthafucka!";
    } else if ((playerSelection === "paper") && (computerChoice === "rock")) {
        return "Hell yeah, you won bitch . . . Paper beats rock muthafucka!";
    } else  if ((playerSelection === "paper") && (computerChoice === "scissors")) {
        return "Damn you lost. . . Scissors beats paper buddy!"
    }else 
        return "Not a valid choice dummy!"
}


console.log(singleGame())