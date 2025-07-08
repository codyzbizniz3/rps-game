const computerScore = document.getElementById('comp-score');
const playerScore = document.getElementById('player-score');
const playerDisplay = document.getElementById('player-display');
const compDisplay = document.getElementById('comp-display');
const allChoices = document.querySelectorAll('button');
let humanChoice;
let computerChoice;

allChoices.forEach(button => button.addEventListener('click', (e) => {
    humanChoice = e.target.textContent;
    playerDisplay.innerHTML = 'You chose ' + humanChoice + '!';
    getComputerChoice();

    compDisplay.innerHTML = 'Computer chose ' + computerChoice + '!';
}));

function getComputerChoice() {


    const number = Math.floor(Math.random() * 3) + 1;
    if (number === 1) {
        computerChoice = "Rock";
    } else if (number === 2) {
        computerChoice = "Paper";
    } else if (number === 3) {
        computerChoice = "Scissors";
    }


    return computerChoice;
}




/*function getHumanChoice() {




}



function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "tie"
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice == "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        return "human";
    } else {
        return "computer";
    }
}

function playGame() {





    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    

    const roundResult = playRound(humanSelection, computerSelection);

    if (roundResult === "human") {
        console.log(`You win this round! ${humanSelection} beats ${computerSelection}!`);
        humanScore++;
    } else if (roundResult === "computer") {
        console.log(`You lose! ${computerSelection} beats ${humanSelection}!`);
        computerScore++
    } else {
        console.log("It's a tie this round!");
    }

    console.log(`Current Score: You ${humanScore} - Computer ${computerScore}`);
}




if (humanScore > computerScore) {
    console.log("You won the game!");
} else if (computerScore > humanScore) {
    console.log("The computer won the game!");
} else {
    console.log("The game is a tie!")
}*/
















