
function getComputerChoice(random) {
    random = Math.floor( Math.random() * 3) + 1;
        
    if (random === 1) {
        return "rock";
    } else if (random === 2) {
        return "paper";
    } else ( random === 3) 
        return "scissors";

}


// function playerSelection(input) {
//      let selection = input.toLowerCase();

//      if (selection === "rock") {
//         return 1;
//      } else if ( selection === "paper") {
//         return 2;
//      } else ( selection === "scissors") 
//         return 3; 

// }


const playerSelection = "scissors";
const computerChoice = getComputerChoice();






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
    } else ((playerSelection === "paper") && (computerChoice === "scissors")) 
        return "Damn you lost. . . Scissors beats paper buddy!"
}

console.log(singleGame())
