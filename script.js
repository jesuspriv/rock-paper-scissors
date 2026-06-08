function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
}
//console.log(getComputerChoice());

function getHumanChoice() {
    const choice = prompt("Please enter rock, paper, or scissors:");
    if (choice === null) {
        return null;
    }
    const lowerCaseChoice = choice.toLowerCase();
    if (lowerCaseChoice === "rock" || lowerCaseChoice === "paper" || lowerCaseChoice === "scissors") {
        return lowerCaseChoice;
    } else {
        alert ("Invalid choice. Please enter rock, paper, or scissors.");
        return getHumanChoice();
    }
}
//console.log(getHumanChoice());
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's a tie!";
    }
    if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "You win this round!";
    } else {
        computerScore++;
        return "Computer wins this round!";
    }
}

function playGame() {
    while (humanScore < 5 && computerScore < 5) {
        const humanChoice = getHumanChoice();
        if (humanChoice === null) {
            alert("Game cancelled.");
            return;
        }
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        alert(result);
        alert(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
    }
    if (humanScore === 5) {
        alert("Congratulations! You won the game!");
    } else {
        alert("Sorry, the computer won the game.");
    }
}
playGame();