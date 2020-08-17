// button variables
const buttonRock = document.getElementById("rock");
const buttonPaper = document.getElementById("paper");
const buttonScissors = document.getElementById("scissors");

const scorePlayerDisplay = document.getElementById("scorePlayer");
const scoreComputerDisplay = document.getElementById("scoreComputer");

const info = document.getElementById("info");

// button helper function
let buttonOutput = '';

function getButtonRock() {
	console.log('rock');
	buttonOutput = 'rock';
	playerSelection = 'rock';
	computerSelection = computerPlay();
}

function getButtonPaper() {
	console.log('paper');
	buttonOutput = 'paper';
	playerSelection = 'paper';
	computerSelection = computerPlay();
}		

function getButtonScissors() {
	console.log('scissors');
	buttonOutput = 'scissors';
	playerSelection = 'scissors';
	computerSelection = computerPlay();
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


function computerPlay() {
	let options = ['rock', 'paper', 'scissors'];
	return options[Math.floor(Math.random() * Math.floor(3))];
}

// selections for each opponent	
let computerSelection = computerPlay(); 
let playerSelection = playerPlay();

// score variable
let scorePlayer = 0;
let scoreComputer = 0;

// info variable

// game function
function game(playerSelection, computerSelection) {	
	playerSelection = playerPlay();
	computerSelection = computerPlay();

	function playRound(playerSelection, computerSelection) {
	
	if(playerSelection === 'rock' && computerSelection === 'paper') {
	scoreComputer++;
	scorePlayerDisplay.innerHTML = scorePlayer.toString();
	scoreComputerDisplay.innerHTML = scoreComputer.toString();
	info.innerHTML = 'You lose! Paper beats Rock';
	}
	else if(playerSelection === 'rock' && computerSelection === 'scissors') {
	scorePlayer++;
	scorePlayerDisplay.innerHTML = scorePlayer.toString();
	scoreComputerDisplay.innerHTML = scoreComputer.toString();
	info.innerHTML = 'You win! Rock beats Scissors!';
	}
	else if(playerSelection === 'rock' && computerSelection === 'rock') {
	scorePlayerDisplay.innerHTML = scorePlayer.toString();
	scoreComputerDisplay.innerHTML = scoreComputer.toString();
	info.innerHTML = 'Tie! Play again';
	}

	else if(playerSelection === 'paper' && computerSelection === 'paper') {
	scorePlayerDisplay.innerHTML = scorePlayer.toString();
	scoreComputerDisplay.innerHTML = scoreComputer.toString();
	info.innerHTML = 'Tie! Play again';
	}
	else if(playerSelection === 'paper' && computerSelection === 'scissors') {
	scoreComputer++;
	info.innerHTML = 'You lose! Scissors beat Paper!';
	}
	else if(playerSelection === 'paper' && computerSelection === 'rock') {
	scorePlayer++;
	scorePlayerDisplay.innerHTML = scorePlayer.toString();
	scoreComputerDisplay.innerHTML = scoreComputer.toString();
	info.innerHTML = 'You win! Paper beats Rock';
	}	

	else if(playerSelection === 'scissors' && computerSelection === 'paper') {
	scorePlayer++;
	scorePlayerDisplay.innerHTML = scorePlayer.toString();
	scoreComputerDisplay.innerHTML = scoreComputer.toString();
	info.innerHTML = 'You win! Scissors beat Paper';
	}
	else if(playerSelection === 'scissors' && computerSelection === 'scissors') {
	scorePlayerDisplay.innerHTML = scorePlayer.toString();
	scoreComputerDisplay.innerHTML = scoreComputer.toString();
	info.innerHTML = 'Tie! Play again';
	}
	else if(playerSelection === 'scissors' && computerSelection === 'rock') {
	scoreComputer++;
	scorePlayerDisplay.innerHTML = scorePlayer.toString();
	scoreComputerDisplay.innerHTML = scoreComputer.toString();
	info.innerHTML = 'You lose! Rock beats Scissors';
	}
}

	return playRound(playerSelection, computerSelection);
}

function playGame() {
	game(playerSelection, computerSelection);
if(scorePlayer === 5 || scoreComputer === 5) {
	if(scorePlayer > scoreComputer) {
	info.innerHTML = 'You win! Click another button to restart the game.'; 
	scorePlayer = 0;
	scoreComputer = 0;
	} else if(scorePlayer < scoreComputer) {
	info.innerHTML = 'Computer wins! Click another button to restart the game.';
	scorePlayer = 0;
	scoreComputer = 0;
	}
}
}

buttonRock.addEventListener('click', playGame);
buttonPaper.addEventListener('click', playGame);
buttonScissors.addEventListener('click', playGame);
