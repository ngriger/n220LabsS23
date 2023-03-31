// Nina Griger, N220, 3-30-23

// Cleanup

//HTML

    //input - stringInput
    //button - updateDisplay
    //div - displayString
//removeCharacter()
    //replace any "#" in string with ""
//update display
    //change innerHTML of displayString to have the replaced characters

let stringInput = document.getElementById("stringInput")
let displayString = document.getElementById("displayString")

function removeCharacter(stringInput) {
    let fixedString = stringInput.replaceAll("#", "")
    displayString.innerHTML = fixedString
}
