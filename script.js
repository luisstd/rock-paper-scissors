// button variables
const buttonRock = document.getElementById("rock");
const buttonPaper = document.getElementById("paper");
const buttonScissors = document.getElementById("scissors");

// button helper function
function getButtonRock() {
	return 'rock';
}

function getButtonPaper() {
	return 'paper';
}		

function getButtonScissors() {
	return 'scissors';
}

// plays turn for each opponent
function playerPlay() {	
	buttonRock.addEventListener('click', getButtonRock);
	buttonPaper.addEventListener('click', getButtonPaper);
	buttonScissors.addEventListener('click', getButtonScissors);
}

function computerPlay() {
	let options = ['rock', 'paper', 'scissors'];
	return options[Math.floor(Math.random() * Math.floor(3))];
}

// selections for each opponent
let playerSelection = playerPlay();
let computerSelection = computerPlay(); 


function playRound(playerSelection, computerSelection) {
	
	if(playerSelection === 'rock' && computerSelection === 'paper') {
	return 'You lose! Paper beats Rock';
	}
	else if(playerSelection === 'rock' && computerSelection === 'scissors') {
	return 'You win! Rock beats Scissors!';
	}
	else if(playerSelection === 'rock' && computerSelection === 'rock') {
	return 'Tie! Play again';
	}

	else if(playerSelection === 'paper' && computerSelection === 'paper') {
	return 'Tie! Play again';
	}
	else if(playerSelection === 'paper' && computerSelection === 'scissors') {
	return 'You lose! Scissors beat Paper!';
	}
	else if(playerSelection === 'paper' && computerSelection === 'rock') {
	return 'You win! Paper beats Rock';
	}
	
	else if(playerSelection === 'scissors' && computerSelection === 'paper') {
	return 'You win! Scissors beat Paper';
	}
	else if(playerSelection === 'scissors' && computerSelection === 'scissors') {
	return 'Tie! Play again';
	}
	else if(playerSelection === 'scissors' && computerSelection === 'rock') {
	return 'You lose! Rock beats Scissors';
	}
}

function game() {
	console.log(playRound(playerSelection, computerSelection));
}
