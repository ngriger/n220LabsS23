//Nina Griger, N220, 3-23-23

//Password Protected

//input br input br button br div
    //get element by ID
    //button function = logIn()
    //accessStatus.innerHTML = ""
//logIn()
    //if txtUsername.value == "Username" && txtPassword == "Password"
    //accessStatus.innerHTML = "Success"
    //else
    //accessStatus.innerHTML = "Wrong Information"

let txtUsername = document.getElementById("txtUsername");
let txtPassword = document.getElementById("txtPassword");
let accessStatus = document.getElementById("accessStatus");
    accessStatus.innerHTML = ""

function logIn(){
    if (txtUsername.value == "Username" && txtPassword.value == "Password") {
        accessStatus.innerHTML = "Success!";
    } else {
        accessStatus.innerHTML = "Wrong information.";
    }
    console.log(accessStatus)
}