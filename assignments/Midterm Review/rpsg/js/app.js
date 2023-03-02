//create global variables

let playerScore = 0;
let computerScore = 0;
let playerChoice = ["Rock", "Paper", "Scissors", "Guard"]


//link and style divs (this cant be fucking right im going to fail this midterm)

let displayChoice = document.getElementById("choice")
        displayChoice.innerHTML = ""
let displayScore = document.getElementById("score")
        displayScore.innerHTML = ""
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
    for (let i = 0; i < 3; i++){
        let j = Math.floor(Math.random()*computerChoice.length)
        computerChoice[j]
    }
    console.log(computerChoice)   
}

function paperClick() {
    let computerChoice = ""
    let computerNumber = Math.floor(Math.random()*3)
    console.log(computerNumber)
    if(computerNumber = 0) {
        computerChoice = "Rock"
    }
    console.log(computerChoice)
}

function scissorsClick() {
    let computerChoice = ""
    let computerNumber = Math.floor(Math.random()*3)
    console.log(computerNumber)
    if(computerNumber = 0) {
        computerChoice = "Rock"
    }
    console.log(computerChoice)
}