// button variables
const buttonRock = document.getElementById("rock");
const buttonPaper = document.getElementById("paper");
const buttonScissors = document.getElementById("scissors");

// button helper function
let buttonOutput = '';

function getButtonRock() {
	console.log('rock');
	buttonOutput = 'rock';
	playerSelection = 'rock';
}

function getButtonPaper() {
	console.log('paper');
	buttonOutput = 'paper';
	playerSelection = 'paper';

}		

function getButtonScissors() {
	console.log('scissors');
	buttonOutput = 'scissors';
	playerSelection = 'scissors';

}

// plays turn for each opponent
function playerPlay() {		
buttonRock.addEventListener('click', getButtonRock);
buttonPaper.addEventListener('click', getButtonPaper);
buttonScissors.addEventListener('click', getButtonScissors);	

	if (buttonOutput === 'rock') {
		return 'rock';
	} else if (buttonOutput === 'paper') {
		return 'paper' 
	} else if (buttonOutput === 'scissors') {
		return 'scissors'
	}
}
playerPlay();

function computerPlay() {
	let options = ['rock', 'paper', 'scissors'];
	return options[Math.floor(Math.random() * Math.floor(3))];
}


// selections for each opponent
const computerSelection = computerPlay(); 


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

