function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors']
    let randNum = Math.floor(Math.random() * 3)
    let choice = choices[randNum]
    return choice
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "You lose! Paper beats rock"
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return "You win! Rock beats scissors"
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return "You lose! Scissors beats paper"
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You win! Paper beats rock"
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return "You lose! Rock beats scissors"
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You win! Scissors beats paper"
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        return "It's a tie"
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return "It's a tie"
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return "It's a tie"
    }
}

function game() {
    let playerCounter = 0
    let computerCounter = 0
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter rock, paper or scissors: ")
        let computerSelection = getComputerChoice()
        let roundResult = playRound(playerSelection, computerSelection)
        console.log(roundResult)
        if (roundResult.includes("win")) {
            playerCounter++
        } else if (roundResult.includes("lose")) {
            computerCounter++
        }
    }
    if (playerCounter > computerCounter) {
        console.log("You won the game!!")
    } else {
        console.log("You lost the game!!")
    }
}