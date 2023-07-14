// Variables

const CHOICES = ['rock', 'paper', 'scissors'];

let rounds = 0;
let playerWins = 0;
let computerWins = 0;
let ties = 0;
let isWinner = false;

const body = document.querySelector('body');
const selectionBtns = document.querySelectorAll('.selection')
const playerScore = document.querySelector('.player-score')
const computerScore = document.querySelector('.computer-score')
const tiesScore = document.querySelector('.ties-score')
const playAgainBtn = document.querySelector('.play-again')
const winnerMessage = document.createElement('div')
const resultMessage = document.querySelector('.result-message');


// Functions

const getComputerChoice = () => CHOICES[Math.floor(Math.random() * CHOICES.length)];

const playRound = (playerSelection, computerSelection) => {
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        playerWins++;
        return `You win! Rock beats Scissors.`
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        computerWins++;
        return `You lose! Paper beats Rock.`
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') {
        ties++;
        return `Tie! No winner.`
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        playerWins++;
        return `You win! Paper beats Rock.`
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
        computerWins++;
        return `You lose! Scissors beats Paper.`
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') {
        ties++;
        return `Tie! No winner.`
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        playerWins++;
        return `You win! Scissors beats Paper`
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
        computerWins++;
        return `You lose! Rock beats Scissors`
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors') {
        ties++;
        return `Tie! No winner.`
    }
}

const updateScore = () => {
    playerScore.textContent = playerWins;
    computerScore.textContent = computerWins;
    tiesScore.textContent = ties;
}

const checkWinner = () => {
    if (playerWins === 5) {
        winnerMessage.textContent = "Player Wins!"
        isWinner = true;
    } else if (computerWins === 5) {
        winnerMessage.textContent = "Computer Wins!"
        isWinner = true;
    }

    body.appendChild(winnerMessage)
}

// DOM

selectionBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const selection = e.target.alt

        if (!isWinner) {
            let result = playRound(selection, getComputerChoice());

            resultMessage.textContent = result;
            updateScore()
            checkWinner()
            
        } else {
            winnerMessage.textContent = "The game is over, STOP!"
        }
        
        e.preventDefault()
    })
})

playAgainBtn.addEventListener('click', (e) => {
    location.reload()
})