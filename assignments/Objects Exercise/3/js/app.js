//Nina Griger, 2-9-23, N220

//World Wrap Refractor

//create ball object
    //properties size position velocity
//animate ball moving to the right of the screen
//if statement to reset ball when done


let ballObject = {
    speed: 5,
    x: 0,
    y: 300,
    r: 50,
}

function setup(){
    createCanvas(800, 600);
}

function draw(){
    background(125, 127, 179);
    circle(ballObject.x, ballObject.y, ballObject.r); 
    ballObject.x = ballObject.x + ballObject.speed; 
    if (ballObject.x > 800) { 
        ballObject.x = 0
    }
}