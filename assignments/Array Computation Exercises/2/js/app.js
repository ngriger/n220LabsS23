//Nina Griger, 5-1-23, N220

//Make Divs

//define array of objects
//for loop, three iterations
    //create new element (newDiv)
    //style using the objects array (color, height, width)

let objects = [
    { color: "#FF0000", height: 100, width: 300 },  
    { color: "#FFFF00", height: 200, width: 200 },
    { color: "#ff0000", height: 300, width: 100 },  
   ];

for (i=0; i < objects.length; i++) {
    let newDiv = document.createElement("div")
    newDiv.style.backgroundColor = objects[i].color
    newDiv.style.height = objects[i].height
    newDiv.style.width = objects[i].width
    
    document.body.appendChild(newDiv)
}