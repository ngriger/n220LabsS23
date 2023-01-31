let cursor = {x: 0, y: 0}; //Change } to ), x: and y: indicators not needed, Rename "aou" to something useful

function setup() {
  createCanvas(400, 400);
}

function draw() {
    background(220);

    if(mouseIsPressed){
      cursor.x = mouseX;
      cursor.y = mouseY;
    }

    line(cursor.x, cursor.y, mouseX, mouseY);
  
  let a = dist(cursor.x, cursor.y, mouseX, mouseY); 
  if(a > 120) {
    stroke("#FF0000");
  } else { 
    stroke("#000000");
  }
}

function dist() {  
  
  let dx = cursor.x - mouseX;
  let dy = cursor.y - mouseY;
  
   Math.sqrt(dx*dx + dy*dy);
}