//Nina Griger, 4-24-23, N220

//Concentration

//create array of different colors for the tiles to turn from gray
//create tiles as different divs, four rows of four
    //sep into containers, all style with one class (use loop from previous assignment)
    //assign hidden color into dataset, add click eventlistener
//when a box is clicked
    //store and reveal hidden color
    //add one to click counter
//click counter hits 2
    //check most recent color against stored color
    //reset counter to 0
    //if match, reset to white after 2 seconds
    //if not match, reset to gray after 2 seconds
//once 8 matches, add reloadButton div to page
    //when clicked, reloads page

let colorOptions = ["red", "red", "orange", "orange", "yellow", "yellow", "green", "green", "teal", "teal", "blue", "blue", "purple", "purple", "pink", "pink"]
let container = document.getElementById("container")
//let clickCounter = 0
let firstColor = ""
let firstBox = ""
let colorMatch = ""
let correctPairs = 0

//styling the squares and creating the color data
for (i = 0; i < 16; i++) {
    let colorChoice = Math.floor(Math.random() * colorOptions.length) //generate a random number to represent a color from the array
    
    let box = document.createElement("div")
        box.style.height = 100
        box.style.width = 100
        box.style.margin = 5
        box.style.backgroundColor = "#7d7d7d"

        box.dataset.hiddenColor = colorOptions[colorChoice] //asigning the random color to the data of the box
        //box.innerHTML = colorOptions[colorChoice]
        colorOptions.splice(colorChoice, 1) //removing the assigned color from the array
        box.addEventListener("click", colorClick)

    container.appendChild(box)

    container.style.width = 420
    container.style.display = "grid"
    container.style.gridTemplateColumns = "1fr 1fr 1fr 1fr"
}

//general function that is run whenever a box is clicked
function colorClick(event) {
    let revealedColor = event.target.getAttribute("data-hidden-color")
    //clickCounter += 1
    // console.log(clickCounter)
    // console.log(revealedColor)
    event.target.style.backgroundColor = revealedColor

    //function that checked the two colors against eachother when first color is equal to the color clicked
    function colorCheck() {
        console.log(revealedColor, firstColor);
        if (firstColor == event.target.getAttribute("data-hidden-color")) {
            // colorMatch = true
            return true;
        } else {
            // colorMatch = false
            return false;
        }
        }
        
        //runs when firstColor is not empty
        if(firstColor != "") {
            if(colorCheck() == false) {
                console.log("fail")
                setTimeout(function (){
                    event.target.style.backgroundColor = "#7d7d7d"
                    firstBox.style.backgroundColor = "#7d7d7d"
                    firstColor = ""
                    firstBox = ""
            }, 2000)
            } else if (colorCheck() == true) {
                console.log("success")
                setTimeout(function (){
                    event.target.style.backgroundColor = "#FFFFFF"
                    firstBox.style.backgroundColor = "#FFFFFF"
                    firstColor = ""
                    firstBox = ""
            }, 2000)
            correctPairs += 1
        }
        
        } else { //runs when firstColor has a value
            //stores the data of the first selection
            firstColor = revealedColor
            firstBox = event.target
        }

    function reloadGame() {
        window.location.reload()
    }

    if (correctPairs == 8) {
        let reloadButton = document.createElement("button")
        reloadButton.innerHTML = "You won! Play again?"
        reloadButton.addEventListener("click", reloadGame)
        document.body.appendChild(reloadButton)
    }
}
