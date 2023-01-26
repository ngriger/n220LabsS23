let r = 20;

function setup(){
    createCanvas (400, 300);
}

function draw(){
    background(129, 74, 143);
    circle(mouseX, mouseY, r);
    
    if (mouseX > 200) {
        fill(156, 59, 59);
    }

    if (mouseX < 200) {
        fill(59, 62, 156);
    }
}