

let rock = 1;
let paper = 2;
let scissors = 3;

function getComputerChoice(random) {
    random = Math.floor( Math.random() * 3) + 1;
    return random;
}
  
  
function playerSelection(input) {
    
     let selection = input.toLowerCase();
    return selection;

}


const playerChoice = playerSelection() ;
const computerChoice = getComputerChoice();