//create global variables

let playerScore = 0;
let playerChoice = "";
let computerChoice = "";
let computerNumber = "";

//link and style divs

let displayChoice = document.getElementById("choice")
        displayChoice.innerHTML = ""
let displayScore = document.getElementById("score")
        displayScore.innerHTML = "Your current score is " + playerScore
let choiceRock = document.getElementById("rock")
        choiceRock.style.backgroundColor = "red"
        choiceRock.innerHTML = "Rock"
        choiceRock.style.width = 40
        choiceRock.style.height = 20
        choiceRock.style.textAlign = "center"
let choicePaper = document.getElementById("paper")
        choicePaper.style.backgroundColor = "yellow"
        choicePaper.innerHTML = "Paper"
        choicePaper.style.width = 45
        choicePaper.style.height = 20
        choicePaper.style.textAlign = "center"
let choiceScissors = document.getElementById("scissors")
        choiceScissors.style.backgroundColor = "blue"
        choiceScissors.innerHTML = "Scissors"
        choiceScissors.style.width = 60
        choiceScissors.style.height = 20
        choiceScissors.style.textAlign = "center"
let choiceGuard = document.getElementById("guard")
        choiceGuard.style.backgroundColor = "green"
        choiceGuard.innerHTML = "Guard"
        choiceGuard.style.width = 45
        choiceGuard.style.height = 20
        choiceGuard.style.textAlign = "center"

function rockClick() {
    computerNumber = Math.floor(Math.random() * 3)
    if (computerNumber == 0) {
        computerChoice = "Rock"
        playerScore = playerScore
    }
    if (computerNumber == 1) {
        computerChoice = "Paper"
        playerScore = playerScore - 1
    }
    if (computerNumber == 2) {
        computerChoice = "Scissors"
        playerScore = playerScore + 1
    }
    displayChoice.innerHTML = "You chose Rock. The computer chose " + computerChoice
    displayScore.innerHTML = "Your current score is " + playerScore

}

function paperClick() {
    computerNumber = Math.floor(Math.random() * 3)
    if (computerNumber == 0) {
        computerChoice = "Rock"
        playerScore = playerScore + 1
    }
    if (computerNumber == 1) {
        computerChoice = "Paper"
        playerScore = playerScore
    }
    if (computerNumber == 2) {
        computerChoice = "Scissors"
        playerScore = playerScore - 1
    }
    displayChoice.innerHTML = "You chose Paper. The computer chose " + computerChoice
    displayScore.innerHTML = "Your current score is " + playerScore
}

function scissorsClick() {
    computerNumber = Math.floor(Math.random() * 3)
    if (computerNumber == 0) {
        computerChoice = "Rock"
        playerScore = playerScore - 1
    }
    if (computerNumber == 1) {
        computerChoice = "Paper"
        playerScore = playerScore + 1
    }
    if (computerNumber == 2) {
        computerChoice = "Scissors"
        playerScore = playerScore
    }
    displayChoice.innerHTML = "You chose Scissors. The computer chose " + computerChoice
    displayScore.innerHTML = "Your current score is " + playerScore
}

function guardClick(){
    computerNumber = Math.floor(Math.random() * 3)
    if (computerNumber == 0) {
        computerChoice = "Rock"
        playerScore = playerScore - 0.5
    }
    if (computerNumber == 1) {
        computerChoice = "Paper"
        playerScore = playerScore - 0.5
    }
    if (computerNumber == 2) {
        computerChoice = "Scissors"
        playerScore = playerScore - 0.5
    }
    displayChoice.innerHTML = "You chose Guard. The computer chose " + computerChoice
    displayScore.innerHTML = "Your current score is " + playerScore
}
