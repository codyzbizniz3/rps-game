const computerScore = document.getElementById('comp-score');
const playerScore = document.getElementById('player-score');
const playerDisplay = document.getElementById('player-display');
const compDisplay = document.getElementById('comp-display');
const tieDisplay = document.getElementById('tie-game');
const result = document.getElementById('result');
const allChoices = document.querySelectorAll('button');
let humanChoice;
let computerChoice;
let roundResult;

allChoices.forEach(button => button.addEventListener('click', (e) => {
    humanChoice = e.target.textContent;
    playerDisplay.innerHTML = 'You chose ' + humanChoice + '!';
    getComputerChoice();
    compDisplay.innerHTML = 'Computer chose ' + computerChoice + '!';
    playRound(humanChoice, computerChoice);
    result.innerHTML = roundResult;

    if (roundResult === "You win!") {
        playerScore.innerHTML++;
    } else if (roundResult === "Computer wins!") {
        computerScore.innerHTML++;
    } else if (roundResult === "It's a tie!") {
        tieDisplay.innerHTML++;
    }
}));

function getComputerChoice() {
    const number = Math.floor(Math.random() * 3);
    if (number === 0) {
        computerChoice = "Rock";
    } else if (number === 1) {
        computerChoice = "Paper";
    } else if (number === 2) {
        computerChoice = "Scissors";
    };
    return computerChoice;
};

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        roundResult = "It's a tie!";
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice == "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        roundResult = "You win!";
    } else {
        roundResult = "Computer wins!";
    }

};





















