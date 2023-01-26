let speed = 5;
let xPos = 0;

function setup(){
    createCanvas(800, 600);
}

function draw(){
    background(125, 127, 179);
    circle(xPos, 300, 50);
    xPos = xPos + speed;
    if (xPos > 800) {
        xPos = 0
    }
}