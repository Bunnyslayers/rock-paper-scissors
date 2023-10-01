
function getComputerChoice(random) {
    random = Math.floor( Math.random() * 3) + 1;
        
    if (random === 1) {
        return "rock";
    } else if (random === 2) {
        return "paper";
    } else ( random === 3) 
        return "scissors";

}
  console.log(getComputerChoice())


// function playerSelection(input) {
//      let selection = input.toLowerCase();

//      if (selection === "rock") {
//         return 1;
//      } else if ( selection === "paper") {
//         return 2;
//      } else ( selection === "scissors") 
//         return 3; 

// }


const playerSelection = "Rock";
const computerChoice = getComputerChoice;
