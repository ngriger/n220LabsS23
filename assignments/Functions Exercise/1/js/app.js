// Drawing Drawer

//setup canvas (800x800)
//Draw dog - function drawDog(x, y)
//Make dog follow mouse
    //drawDog(mouseX, mouseY)

function setup(){
    createCanvas(800,800);
}

function drawDog(x,y){
    fill(0);
    //body and head
    rect(x, y, 100, 30);
    square(x, y-30, 30);
    //snout and ears
    triangle(x, y-18, x, y, x-20, y-7)
    triangle(x, y-30, x+10, y-30, x, y-50);
    triangle(x+20, y-30, x+30, y-30, x+30, y-50);
    //legs
    triangle(x, y+30, x+10, y+30, x+5, y+70);
    triangle(x+10, y+30, x+20, y+30, x+15, y+70);
    triangle(x+80, y+30, x+90, y+30, x+85, y+70);
    triangle(x+90, y+30, x+100, y+30, x+95, y+70);
    //tail
    triangle(x+90, y, x+100, y, x+115, y-25);
}

function draw(){
    background(255, 255, 255);
    drawDog(mouseX, mouseY);
}