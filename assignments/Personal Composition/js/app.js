//Nina Griger, N220, 1-19-23

let d = 250
let red = '222';

//Creating Canvas and setting BG color
function setup(){
    createCanvas(600, 500);
    background(95, 130, 104);
}

function draw(){
    //Circle Base
    fill(red, 206, 100);
    circle(300, 250, d);
    
    //Sunglasses Base
    fill(0, 0, 0);
    rect(185, 235, 96, 30);

    fill(0, 0, 0,);
    rect(315, 235, 96, 30);

    fill(0, 0, 0,);
    rect(280, 235, 40, 15);

    //Sunglasses Shine
    fill(255, 255, 255);
    quad(217, 265, 249, 265, 267, 235, 235, 235);

    fill(255, 255, 255);
    quad(347, 265, 379, 265, 397, 235, 365, 235);

    //Mouth
    fill(255, 255, 255);
    triangle(275, 300, 325, 300, 300, 350);

    //Thumbs Up
    fill(red, 206, 100);
    rect(50, 300, 60, 75);

    fill(red, 206, 100);
    rect(55, 275, 25, 25);
    line(50, 325, 110, 325);
    line(50, 350, 110, 350);
}