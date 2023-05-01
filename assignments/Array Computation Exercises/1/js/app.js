//Nina Griger, 5-1-23, N220

//It's just average

//create/add divs to page
//user input - comma separated numbers
    //for loop
        //split the value of the user input into an array
        //calculate sum
        //calculate avg
        //update page

let txtInput = document.getElementById("txtInput")
let inputSum = 0
let inputAvg = 0
let sumDisplay = document.getElementById("sumDisplay")
let avgDisplay = document.getElementById("avgDisplay")

function runNumbers() {
    let splitInput = txtInput.value.split(",")

    for (i = 0; i < splitInput.length; i++) {
        inputSum = inputSum + Number(splitInput[i])  
        inputAvg = inputSum / splitInput.length
    }
    sumDisplay.innerHTML = "Sum: " + inputSum
    avgDisplay.innerHTML = "Average: " + inputAvg
}