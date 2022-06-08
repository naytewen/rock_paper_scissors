function computerPlay() {
    let randNum = Math.floor(Math.random() * 3);
    if (randNum == 0) {
        return "Rock";
    }
    else if (randNum == 1) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    player = playerSelection.toUpperCase();

    if (player == "ROCK") {
        if (computerSelection == "Rock") {
            return "Tie Game";
        }
        else if (computerSelection == "Paper") {
            return "You lose! Computer Wins!";
        }
        else {
            return "You win! Computer loses!"
        }
    }
    else if (player == "SCISSORS") {
        if (computerSelection == "Rock") {
            return "You lose! Computer Wins!";
        }
        else if (computerSelection == "Paper") {
            return "You win! Computer loses!"
        }
        else {
            return "Tie Game";
        }
    }
    else {
        if (computerSelection == "Rock") {
            return "You win! Computer loses!"
        }
        else if (computerSelection == "Paper") {
            return "Tie Game";
        }
        else {
            return "You lose! Computer Wins!";
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (i = 0; i < 5; i++) {
        let player = prompt("Rock, Paper, or Scissors");
        let result = playRound(player, computerPlay());
        if (result == "You win! Computer loses!") {
            playerScore += 1;
            console.log("You win round " + (i + 1));
        }
        else if (result == "You lose! Computer Wins!") {
            computerScore += 1;
            console.log("Computer wins round " + (i + 1));
        }
        else {
            console.log("Tie! No winners during round " + (i + 1));
        }
    }

    if (playerScore > computerScore) {
        console.log("You win! Congrats!");
    }
    else if (playerScore < computerScore) {
        console.log("You lose... Try again next time.");
    }
    else {
        console.log("Tie game!");
    }
}

game()


