//### is_object
//Write a JavaScript function to check whether an `input` is an object or not.

function isObject(obj) {
    if (typeof obj == 'object' && obj != null) {
        return true;
    } else {
        return false;
    }
}


// Create object car
//Write an object that represents a car with three properties: `brand`, `model`, `color`. Add a method that shows the following message: 'My black Sean León is great!' (Hint: use `this`)

function Car (brand, model, color) {
    this.brand = brand;
    this.model = model;
    this.color = color;    
};

Car.prototype.message = function () {
    return 'My ' + this.color + ' ' + this.brand + ' ' + this.model + ' is great!';
}

var myCar = new Car('Seat','León','black');

myCar.message();