const btnRock = document.querySelector('.rock')
const btnPaper = document.querySelector('.paper')
const btnScissor = document.querySelector('.scissors')
const btnReset = document.querySelector('.reset')
const divResult = document.querySelector('#result')
const scorePlayer = document.querySelector('.scoreplayer')  
const scoreComputer = document.querySelector('.scorecomputer')

btnRock.addEventListener('click', () =>{
    const resultado = playRound('rock', getComputerChoice());
    divResult.innerHTML = resultado;
    winner();
    
})
btnPaper.addEventListener('click', () =>{
    const resultado = playRound('paper', getComputerChoice());
    divResult.innerHTML = resultado;
    winner();
    
})
btnScissor.addEventListener('click', () =>{
    const resultado = playRound('scissors', getComputerChoice());
    divResult.innerHTML = resultado;
    winner();
    
})
btnReset.addEventListener('click', () =>{
    
    Resetear()
})


function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
}
//console.log(getComputerChoice());

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
        scorePlayer.textContent = humanScore;
        return `You win this round! your score is ${humanScore}`;
    } else {
        computerScore++;
        scoreComputer.textContent = computerScore;
        return `Computer wins this round! his score is ${computerScore}`;
    }
}

function winner(){
    if(humanScore === 5){
        divResult.innerHTML = `you are a win ${humanScore}`;
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissor.disabled = true;
    }else if(computerScore === 5){
        divResult.innerHTML = `Computer is a win ${computerScore}`;
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissor.disabled = true;
    }
}

function Resetear(){
        humanScore = 0;
        computerScore = 0;
        btnRock.disabled = false;
        btnPaper.disabled = false;
        btnScissor.disabled = false;
        divResult.textContent = "";
        scorePlayer.textContent = "0";
        scoreComputer.textContent = "0";
}