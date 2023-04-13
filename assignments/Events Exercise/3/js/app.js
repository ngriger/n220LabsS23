//Nina Griger, N220, 4-12-23

//Flash Cards

//Create divs
    //three question buttons - answer in data
    //answer div
    //button onclick should link to answerQuestion(event)
//onclick function
    //changes innerHTml of answer div to event.target answer data

function answerQuestion(event){
    let answerDiv = document.getElementById("answerDiv")
    answerDiv.innerHTML = event.target.getAttribute("data-answer")
}