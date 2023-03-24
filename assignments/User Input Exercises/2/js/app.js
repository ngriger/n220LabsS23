//Nina Griger, N220, 3-23-23

//Tip Calculator

//HTML = input, break, button
    //getElementbyId
    //button function = calculateTip
    //input = base (convert value to number)
    //button result is the tip (math percentage 20%)
//console.log(billDisplay)
    //let fullBill = tip + base
    //let billDisplay = "Tip:$" + tip + " Total:$" + fullBill

let txtPrice = document.getElementById("txtPrice");

function calculateTip() {
    let basePrice = Number(txtPrice.value);
    let tipPrice = Math.floor(basePrice * 0.2);
    let fullBill = tipPrice + basePrice;
    let billDisplay = "Tip:$" + tipPrice + " Total:$" + fullBill
    console.log(billDisplay)
}