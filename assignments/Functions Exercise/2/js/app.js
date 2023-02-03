//Red Remover

//introduce color variable
//setup canvas (500x500)
    //set color variable to 170, 200, 150
//create function starting with color (yesRed)
    //change R value of color to 0
    //return
//define new variable with result of yesRed function
    //use new color variable to fill circle

let start;

function setup(){
    createCanvas(500, 500);
    start = color(170, 200, 150);
}

function yesRed(start){
    start.setRed(0);
    return start
}

function draw(){
    let noRed = yesRed(start);
    fill(noRed);
    circle(400, 400, 50);
}
