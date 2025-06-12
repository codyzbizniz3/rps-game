console.log('Welcome to Rock, Paper, Scissors!')

let playerChoice = prompt('Please choose rock, paper, or scissors.');

let cleanChoice = playerChoice.toLowerCase();

console.log(`You chose ${cleanChoice}!`);

function getComputerChoice() {
    const number = Math.floor(Math.random() * 3) + 1;

    let choice;
    if (number === 1) {
        choice = "rock";
    } else if (number === 2) {
        choice = "paper";
    } else if (number === 3) {
        choice = "scissors";
    }

    console.log(`Computer chooses ${choice}!`);
}

getComputerChoice();







