//Nina Griger, 2-9-23, N220

//Data-driven display w/ function

//create object with properties
    //width, height, color, position
//draw function
    //use object.width, object.height, object.color, etc
//function using object argument
    //function drawObject(object)
    //draw the object to the screen

let boxObject = {
    width: 40,
    height: 40,
    x: 100,
    y: 100,
    c: '',
}

function setup(){
    createCanvas(800,800);
    boxObject.c = color(143, 94, 166);
}

function drawBox(boxObject){
    fill(boxObject.c);
    rect(boxObject.x, boxObject.y, boxObject.width, boxObject.height);
}

function draw() {
    drawBox(boxObject);
}

console.log(boxObject)

