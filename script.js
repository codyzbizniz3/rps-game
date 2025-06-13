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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!"
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice == "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
        return `You lose! ${computerChoice} beats ${humanChoice}.`
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
const result = playRound(humanSelection, computerSelection);
console.log(result);













