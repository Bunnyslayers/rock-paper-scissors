

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

    var computerChoice = getComputerChoice();
    var playerSelection = prompt("Chose your fighter . . . rock, paper , scissors!").toLowerCase();
  

    if ((playerSelection === "rock") && (computerChoice === "scissors") || 
    (playerSelection === "scissors") && (computerChoice === "paper") || 
    (playerSelection === "paper") && (computerChoice === "rock"))  {

        playerScore++;

        return (playerWon + playerSelection + " beat  " + computerChoice + ".");
    } else if ( (playerSelection === "rock") && (computerChoice === "paper") ||
     (playerSelection === "scissors") && (computerChoice === "rock") ||
     (playerSelection === "paper") && (computerChoice === "scissors"))  {

        computerScore++;


        return (computerWon + computerChoice + " beats " + playerSelection  + ".")
     } else if (playerSelection === computerChoice) {
        return playersTied
     } else 
        return "Not a valid choice dummy."
}



var computerScore = 0;
var playerScore = 0;

for (i = 0; i <= 100; i++) {
    if ( computerScore === 5){ 
       console.log("Game over you lost!");
       break
       
    } else if( playerScore === 5) {
        console.log("Game over you win buddy!")
        break
        
    } else {
        console.log(singleGame());
        console.log(computerScore);
        console.log(playerScore);
       
}
    
}




// define callable value for win on players end -- else computer gains point

// add 1++ every iteration based on value that outcome of match decided

// assign 1++ to value created to maintain score over all iterations

// stop game when one player recieves 5 points

// clarify difference between LET - VAR - CONST

//