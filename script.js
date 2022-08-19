

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

const result = document.querySelector(".result")

const score1 = document.querySelector(".player")
const score2 = document.querySelector(".computer")

function increment(score) {
    score.innerText = parseInt(score.innerText) + 1
    
}

function changeResult(outcome) {
    result.innerText = outcome
}




let buttons = document.querySelectorAll("button")
buttons.forEach((button) => {

    button.addEventListener('click', () => {
        const selection = button.name;
        playRound(selection, computerPlay());
        if (score1.innerHTML == "5") {
            alert(`YOU WON ${score1.innerHTML} : ${score2.innerHTML}`)
            location.reload()

        }
        else if (score2.innerHTML == "5") {
            alert(`YOU LOST ${score1.innerHTML} : ${score2.innerHTML}`)
            location.reload()
        }
    });
});




function playRound(playerSelection, computerSelection) {
    player = playerSelection.toUpperCase();

    if (player == "ROCK") {
        choice(u, "ROCK")
        if (computerSelection == "Rock") {
            changeResult("TIE")
            choice(c, "ROCK")
            return "Tie Game";
        }
        else if (computerSelection == "Paper") {
            changeResult("LOSE")
            choice(c, "PAPER")
            increment(score2)
            return "You lose! Computer Wins!";
        }
        else {
            choice(c, "SCISSORS")
            changeResult("WIN")
            increment(score1)
            return "You win! Computer loses!"

        }
    }
    else if (player == "SCISSORS") {
        choice(u, "SCISSORS")
        if (computerSelection == "Rock") {
            changeResult("LOSE")
            choice(c, "ROCK")
            increment(score2)
            return "You lose! Computer Wins!";
        }
        else if (computerSelection == "Paper") {
            changeResult("WIN")
            choice(c, "PAPER")
            increment(score1)
            return "You win! Computer loses!"
        }
        else {
            changeResult("TIE")
            choice(c, "SCISSORS")
            return "Tie Game";
        }
    }
    else {
        choice(u, "PAPER")
        if (computerSelection == "Rock") {
            changeResult("WIN")
            increment(score1)
            return "You win! Computer loses!"
        }
        else if (computerSelection == "Paper") {
            changeResult("TIE")
            choice(c, "PAPER")
            return "Tie Game";
        }
        else {
            changeResult("LOSE")
            choice(c, "SCISSORS")
            increment(score2)
            return "You lose! Computer Wins!";
        }
    }

}

const u = document.querySelector(".you")
const c = document.querySelector(".comp")

function choice(p, c) {
    p.innerText = c
}




function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (i = 0; i < 5; i++) {
        let player = buttons;
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

//game()


