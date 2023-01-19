let r = 0
//Variable to set radius
function setup(){
    createCanvas(800, 800)

    console.log(r);
}

//Function that makes the circle follow the mouse
function draw(){
    circle (mouseX, mouseY, r)
//makes the circle grow if the mouse is pressed
    if(mouseIsPressed){
        r+=10
    }
//keeps the radius of the circle from going above 50 pixels    
    if(r>50){
        r=10
    }

    console.log(r);
}

