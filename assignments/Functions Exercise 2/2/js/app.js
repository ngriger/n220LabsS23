// Nina Griger, N220, 3-30-23

//Make Random

//HTML
    //button - onclick updateDisplay()
    //div - numberDisplay
//write a function that generates a random number between 0 and 10
    //return Math.floor(Math.random()*10)
//updateDisplay()
    //call generateNumber()
    //update NumberDisplay.innerHTML to generate random number on the page

let numberDisplay = document.getElementById("numberDisplay")

function generateNumber() {
    return Math.floor(Math.random()*10);
}

function updateDisplay() {
    numberDisplay.innerHTML = generateNumber()
}