// Nina Griger, N220, 3-30-23

//Is Divisible By Seven

//HTML
    //input div - numberInput
    //button div - run updateDisplay() onclick
    //div - displayResult
//define variable - testResult
//define variable - numberInput
//testInput()
    //if numberInput % 7, testResult = true
    //else, testResult = false
//updateDisplay()
    //if testResult true, displayResult.innerHTML = "This number is divisible by seven."
    //else, displayResult.innerHTML = "This number is not divisible by seven."

let numberInput = document.getElementById("numberInput");
let displayResult = document.getElementById("displayResult");

function testInput() {
    console.log(numberInput.value)
    if (numberInput.value % 7) {
        return false;
    } else {
        return true;
    }
}

function updateDisplay() {
    if (testInput()) {
        displayResult.innerHTML = "This number is divisible by seven."
    } else {
        displayResult.innerHTML = "This number is not divisible by seven."
    }
}