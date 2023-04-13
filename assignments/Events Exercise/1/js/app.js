//Nina Griger, N220, 4-12-23

//Color Changer

//define divs
//style each div using class (loop?)
//assign data to divs (HTML)
//write onclick event function using event.target

let firstBox = document.getElementById("firstBox")
let secondBox = document.getElementById("secondBox")
let thirdBox = document.getElementById("thirdBox")

let boxes = document.getElementsByClassName('box');
for(let i = 0; i < boxes.length; i++) { 
  boxes[i].style.height = 200
  boxes[i].style.width = 200
  boxes[i].style.backgroundColor = "#808080"
  boxes[i].style.margin = 5
  boxes[i].style.float = "left"
}

function boxClick(event) {
    let newColor = event.target.getAttribute("data-color")
    event.target.style.backgroundColor = newColor
}