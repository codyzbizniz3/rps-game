console.log('Welcome to Rock, Paper, Scissors!')

function getHumanChoice() {
    let humanChoice = prompt("Please choose rock, paper, or scissors.");
    humanChoice = humanChoice.toLowerCase();

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


    return computerChoice;
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
    let humanScore = 0;
    let computerScore = 0;
    const rounds = 5;

    for (let i = 0; i < rounds; i++) {
        console.log(`\n--- Round ${i + 1} ---`);

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(`You chose: ${humanSelection}!`);
        console.log(`Computer chose: ${computerSelection}!`);

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


    console.log("\n---Final Game Results---");
    console.log(`Your score: ${humanScore}`);
    console.log(`Computer Score: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > humanScore) {
        console.log("The computer won the game!");
    } else {
        console.log("The game is a tie!")
    }
}

playGame();













