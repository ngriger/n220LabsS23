//Function One - Identify vowel

//html - input
//make input a string variable - txtExample
//write function - function testVowel(txtExample)

let txtExample = document.getElementById("txtExample");

function testVowel(txtExmaple) {
    console.log(txtExample.value)
    if (txtExample == "A") {
        vowelResult = true
    } else {
        vowelResult = false
    }
    console.log(vowelResult)
}