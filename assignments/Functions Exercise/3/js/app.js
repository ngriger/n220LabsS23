//Nina Griger, n220, 2-2-23

//Polar Points

//setup canvas (800x800)
//create polar points function - polarPoint(r)
    //define x value
    //define y value
    //return statement
//draw function
    //create variable that follows polarPoint function
    //translate(100, 100)
    //draw circle following variable, radius 10


function setup(){ //make canvas
    createCanvas(800, 800);
}

function polarPoint(r){ //create polarPoints function
    let x = r * Math.sin(mouseX);
    let y = r * Math.cos(mouseX);

    return createVector(x,y);
}

function draw(){
    let res = polarPoint(20);
    translate(100, 100);
    circle(res.x, res.y, 10);
}