console.log('Welcome to Rock, Paper, Scissors!')

function getHumanChoice() {
    let humanChoice = prompt("Please choose rock, paper, or scissors.");
    humanChoice = humanChoice.toLowerCase();
    console.log(`You chose ${humanChoice}!`);
    return humanChoice;
}

function getComputerChoice() {
    const number = Math.floor(Math.random() * 3) + 1;

    let computerChoice;
    if (number === 1) {
        computerChoice = "rock";
    } else if (number === 2) {
        computerChoice = "paper";
    } else if (number === 3) {
        computerChoice = "scissors";
    }

    console.log(`Computer chooses ${computerChoice}!`);
    return computerChoice;
}













