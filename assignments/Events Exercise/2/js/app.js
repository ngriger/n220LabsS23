//Nina Griger, N220, 4-12-23

//Color Mixer

//Create divs
    //large color box - set size and color in js
        //use a different variable for each color value?
    //current color display div
    //row 1 - red buttons
        //give each button data-value attribute for value of the button press
        //onclick runs change color function - specific for each color?
    //row 2 - green buttons
    //row 3 - blue buttons

let r = 111
let g = 133
let b = 61

let colorBox = document.getElementById("colorBox")
    colorBox.style.height = 200
    colorBox.style.width = 500
    colorBox.style.backgroundColor = "rgb("+r+", "+g+", "+b+")"

function changeRed(event){
    r = r + Number(event.target.getAttribute("data-value"))
    colorBox.style.backgroundColor = "rgb("+r+", "+g+", "+b+")"
}

function changeGreen(event){
    g = g + Number(event.target.getAttribute("data-value"))
    colorBox.style.backgroundColor = "rgb("+r+", "+g+", "+b+")"
}

function changeBlue(event){
    b = b + Number(event.target.getAttribute("data-value"))
    colorBox.style.backgroundColor = "rgb("+r+", "+g+", "+b+")"
}