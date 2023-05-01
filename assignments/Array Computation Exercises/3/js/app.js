//Nina Griger, 5-1-23, N220

//Bad word catcher with loops

//create user input
//button that checks for bad words
    //onclick check function
//check function
    //split input string on spaces
    //for loop
        //if array[i].value == "clear", "water", "tires"
        //add one to counter
    //if badWords != 0
        //"You wrote a bad word! There are badWords bad words in the string."
        //else "There are no bad words in the string."

let resultDisplay = document.getElementById("resultDisplay")
let txtInput = document.getElementById("txtInput")
let badWords = 0

function wordsCheck() {
    let splitInput = txtInput.value.split(" ")
    for (i = 0; i < splitInput.length; i++) {
        console.log(splitInput)
        console.log(splitInput[1])
        if (splitInput[i] == "clear" || splitInput[i] == "water" || splitInput[i] == "tires") {
            badWords += 1
        }
    }

    console.log(badWords)
    
    if (badWords != 0) {
        resultDisplay.innerHTML = "You wrote a bad word! There are " + badWords + " bad words in the string."
        badWords = 0
    } else {
        resultDisplay.innerHTML = "There are no bad words in the string."
    }
}