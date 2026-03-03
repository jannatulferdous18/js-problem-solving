let genericCar = { tyres: 4 };
let tesla = { driver: "AI" };

let bmw = { airbags: true };

let audi = {};

Object.setPrototypeOf(tesla, genericCar);

Object.setPrototypeOf(audi, genericCar);

console.log("Tesla prototype: ", Object.getPrototypeOf(tesla));

console.log(
  "Does tesla has its own property 'driver': ",
  tesla.hasOwnProperty("driver")
);

console.log(
  "Does audi has its own property 'driver': ",
  audi.hasOwnProperty("driver")
);

console.log(
  `GenericCar is prototype of Tesla:  ${genericCar.isPrototypeOf(tesla)}`
);
console.log(
  `GenericCar is prototype of BMW:  ${genericCar.isPrototypeOf(bmw)}`
);
