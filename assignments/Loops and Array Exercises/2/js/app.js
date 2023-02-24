//Nina Griger, 2-23-22, N220

//2- Beep Bop

//create div in HTML
//for loop - i < 24
    //if statements
    //i%3 - beep
    //i/%5 - bop
    //i%3 and 5? - beepbop

let myDiv = document.getElementById("beBop")

for (i = 0; i < 24; i++) {
    if(i%3) {
        myDiv.innerHTML += " beep"
    }
    if(i%5) {
        myDiv.innerHTML += " bop"
    }
    if(i%3 && i%5) {
        myDiv.innerHTML += " beepbop"
    }
}