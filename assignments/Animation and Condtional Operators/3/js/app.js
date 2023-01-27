//Nina Griger, N220, 1-26-23

//3 - World Wrap

let speed = 5; //Create variable 'speed' (set to 5)
let xPos = 0; //Create variable xPos (set to 0)

function setup(){
    createCanvas(800, 600);
}

function draw(){
    background(125, 127, 179);
    circle(xPos, 300, 50); //creates circle that starts on the middle left side of the screen
    xPos = xPos + speed; //makes the circle move right
    if (xPos > 800) { //resets circle once it reaches the end of the canvas
        xPos = 0
    }
}