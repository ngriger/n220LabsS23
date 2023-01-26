let cursor = (0, 0); //Change } to ), x: and y: indicators not needed, Rename "aou" to something useful

function setup() {
  createCanvas(400, 400);
}

function draw() {
    background(220);
    cursor = (mouseX, mouseY);

    let p1 = (0, 0);
    let p2 = (0, 0);

    if(mouseIsPressed){
        line(cursor.x, cursor.y, mouseX, mouseY); //spelling error, "mooseY", missing comma after aou.y
    }
  
  let a = dist(p1, p2, mouseX, mouseY); //change "distance" to p5 variable "dist"
  
  if(a > 120) {
    stroke("#FF0000");
  } else { //if-else statement not formatted properly
    stroke("#000000");
  }
}

function dist(p1, p2) {  //change "distance" to p5 variable "dist"
  
  let dx = p1.x - p2.x;
  let dy = p1.y - p2.y;
  
  //return the distance
   Math.sqrt(dx*dx + dy*dy);
}