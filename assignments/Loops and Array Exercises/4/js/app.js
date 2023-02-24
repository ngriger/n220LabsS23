//Nina Griger, 2-23-22, N220

//4- Favorray

//Five favorite things listed as items in array (use "")
//for loop, i = 0, i < 5, i++
    //things.InnerHTML = i + "is one of my favorite things"

let things = document.getElementById("things")
let myArray = ["A rat", "A cat", "Seafood", "The color purple", "Hotline Miami"]

for (i = 0; i < myArray.length; i++) {
    things.innerHTML += myArray[i] + " is one of my favorite things. "
}