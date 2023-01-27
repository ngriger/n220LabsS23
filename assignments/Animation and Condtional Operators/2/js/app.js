//Nina Griger, N220, 1-26-23

//Puck Side

let r = 20; //Create variable 'r'

function setup(){
    createCanvas (400, 300); //Create canvas 400x300
}

function draw(){
    background(129, 74, 143);
    circle(mouseX, mouseY, r); //Circle that follows mouse location
    
    if (mouseX > 200) {
        fill(156, 59, 59); //Fills the circle red on the right
    }

    if (mouseX < 200) {
        fill(59, 62, 156); //Fills the circle blue on the left
    }
}