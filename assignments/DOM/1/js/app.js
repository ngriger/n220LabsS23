//Nina Griger, 2-16-23, N220

//Peak Pixels

//create variable for squareSize (100px)
//call the div into js (getElementbyID)
    //set height and width to squareSize variable
    //set background color to green
//function - dvSquare is clicked (onclick), size increases by 10%

let squareSize = 100
console.log(squareSize);

let divSquare = document.getElementById("square")
divSquare.style.height = squareSize
divSquare.style.width = squareSize
divSquare.style.backgroundColor = "#4f7d40"
  
function growSquare() {
    squareSize = squareSize * 1.1
    divSquare.style.height = squareSize + "px"
    divSquare.style.width = squareSize + "px"
}
