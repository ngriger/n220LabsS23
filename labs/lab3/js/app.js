let myBike = {
    age: 0,
    wear: 0
}

function ageBike(myBike) {

    myBike.age = myBike.age + 1;

    if (myBike.age >= 5) {
        myBike.wear = 100;
    }
}

ageBike(myBike);
ageBike(myBike);
ageBike(myBike);
ageBike(myBike);
ageBike(myBike);

console.log(myBike);
