//Nina Griger, N220, 3-23-23

//Greeter

//Create input and button in HTML
    //include breaks
    //getElementbyID in js
//function button onclick
    //changes value of variable to "Hello" + nameInput.value
    //console.log base variable

let nameInput = document.getElementById("nameInput");

function clickGreeting() {
    let nameGreeting = "Hello " + nameInput.value
    console.log(nameGreeting)

    nameInput.value = ""
}