// bind example
var car = { 
    registrationNumber: "MH-123",
    brand: "Nexon",

    displayDetails: function(){
        console.log(this.registrationNumber + " " + this.brand);
    }
}

var myCarDetails = car.displayDetails.bind(car); 
myCarDetails(); // GA12345 Toyota


// The main diff between apply & call is we passed array as arg in apply & in call passed normal arg list. 
car = {
    registrationNumber: "MH-123",
    brand: "Nexon"
}

function displayDetails(firstName, lastName) {
    console.log(firstName + " "+lastName+", this is your car: " + this.registrationNumber + " " + this.brand);
}

displayDetails.apply(car, ["Sagar", "Behare"]);

//OR

displayDetails.call(car, "Sagar", "Behare");
