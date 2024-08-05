const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");
let playerScore = 0;
let computerScore = 0;

function getRandomComputerResult() {
	const options = ["Rock", "Paper", "Scissors"];
	return options[Math.floor(Math.random() * options.length)];
}

function hasPlayerWonTheRound(player, computer) {
	if (player === "Rock" && computer === "Scissors") return true;
	if (player === "Scissors" && computer === "Paper") return true;
	if (player === "Paper" && computer === "Rock") return true;

	return false;
}

function getRoundResults(userOption) {
	const computerResult = getRandomComputerResult();
	if (userOption === computerResult) {
		return `It's a tie! Both chose ${userOption}`;
	}
	if (hasPlayerWonTheRound(userOption, computerResult)) {
		++playerScore;
		return `Player wins! ${userOption} beats ${computerResult}`;
	} else {
		++computerScore;
		return `Computer wins! ${computerResult} beats ${userOption}`;
	}
}

function showResults(userOption) {
	roundResultsMsg.innerText = getRoundResults(userOption);
	computerScoreSpanElement.innerText = computerScore;
	playerScoreSpanElement.innerText = playerScore;

	if (playerScore === 3)
		winnerMsgElement.innerText = "Player has won the game!";
	if (computerScore === 3)
		winnerMsgElement.innerText = "Computer has won the game!";

	if (playerScore === 3 || computerScore === 3) {
		resetGameBtn.style.display = "block";
		optionsContainer.style.display = "none";
	}
}

function resetGame() {
	computerScore = 0;
	playerScore = 0;
	computerScoreSpanElement.innerText = "";
	playerScoreSpanElement.innerText = "";
	resetGameBtn.style.display = "none";
	optionsContainer.style.display = "block";
	winnerMsgElement.innerText = "";
	roundResultsMsg.innerText = "";
}

showResults("Rock");
