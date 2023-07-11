// Variables

const CHOICES = ['rock', 'paper', 'scissors'];

let rounds = 0;
let playerWins = 0;
let computerWins = 0;
let ties = 0;

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

const game = () => {
    while (rounds < 5) {
        console.log(playRound('rock', getComputerChoice()));
        rounds++;
    }

    console.log(`Player wins: ${playerWins}\nComputer wins: ${computerWins}\nTies: ${ties}`)
}


game()