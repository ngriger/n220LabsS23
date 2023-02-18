//Nina Griger, 2-16-23, N220

//McDiv'ns

//create square div on page (dont forget to put in html)
    //height, width, bg color
//squareDiv onclick, change innerHTML to mc
//if statement - innerHTML = mcmcmc, change to divdivdiv

let mcSquare = document.getElementById("square")
mcSquare.style.height = 150
mcSquare.style.width = 150 
mcSquare.style.backgroundColor = "#475680"
  
function changeText() {
    mcSquare.innerHTML = ""
    mcSquare.innerHTML = mcSquare.innerHTML + "mc"
    console.log(mcSquare.innerHTML)
    if (mcSquare.innerHTML = "mcmcmc") {
        mcSquare.innerHTML = "divdivdiv";
    }
    console.log(mcSquare.innerHTML)
}
