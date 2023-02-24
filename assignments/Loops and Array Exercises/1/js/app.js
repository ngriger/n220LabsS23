//Nina Griger, 2-23-22, N220

//1- Loop, but big

//Create div in HTML
//create array of 1000, 2000, 3000, 4000, 5000
//for loop
    //changes div to display numbers for value of i, set i to array

let myArray = [1000, 2000, 3000, 4000, 5000];
let myDiv = document.getElementById("item")

for (let i = 0; i < myArray.length; i++) {
    myDiv.innerHTML += myArray[i];
}