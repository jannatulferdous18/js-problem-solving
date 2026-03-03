class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start() {
    return `${this.model} is a car of ${this.make}`;
  }
}

class Car extends Vehicle {
  drive() {
    return `${this.make} drives without a driver`;
  }
}

let myCar = new Car("Tesla", "Model S");
console.log(myCar.start());
