//Nina Griger, 2-9-23, N220

//Reverse Tennis

//create first object (tall rect)
    //properties x y width height
    //x property = left side of screen
//create second object (tall rect)
    //properties x y width height
    //x property = right side of screen
//draw function
    //draw both rectangles
    //if statement - up key, one up one down
        //do this by changing y properties !
    //if statement - down key, other one up one down

let firstBox = {
    x: 100,
    y: 200,
    width: 75,
    height: 100,
}

let secondBox = {
    x: 300,
    y: 200,
    width: 75, 
    height: 100,
}

function setup(){
    createCanvas(600, 600);
}

function draw(){
    background(255, 255, 255);
    rect(firstBox.x, firstBox.y, firstBox.width, firstBox.height);
    rect(secondBox.x, secondBox.y, secondBox.width, secondBox.height);
    if (keyIsDown(UP_ARROW)) {
        firstBox.y = firstBox.y + 1;
        secondBox.y = secondBox.y - 1;
      }

    if (keyIsDown(DOWN_ARROW)) {
        firstBox.y = firstBox.y - 1;
        secondBox.y = secondBox.y + 1;
      }
}