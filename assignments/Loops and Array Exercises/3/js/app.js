//Nina Griger, 2-23-22, N220

//3- Runner Up

//divs in html
//create array of 68, 72, 75
//firstDiv.InnerHTML = array[1]
//secondDiv.InnerHTML = array[2]

let firstDiv = document.getElementById("time2");
let secondDiv = document.getElementById("time3");
let times = [68, 72, 75];

firstDiv.innerHTML = times[1];
secondDiv.innerHTML = times[2];