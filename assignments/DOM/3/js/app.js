//Nina Griger, 2-16-23, N220

//Over and Out

//square div on page (dont forget to include in HTML)
    //100x100, blue background
//onmouseover, change bg color to black
//onmouseoff, change bg color back to blue

let dvSquare = document.getElementById("square")
dvSquare.style.height = 100
dvSquare.style.width = 100
dvSquare.style.backgroundColor = "#0f37a8"

function changeBlack() {
    dvSquare.style.backgroundColor = "#000000"
}

function changeBlue() {
    dvSquare.style.backgroundColor = "#0f37a8"
}