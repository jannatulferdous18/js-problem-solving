const animal = { eats: true };

const dog = Object.create(animal);

console.log(dog.hasOwnProperty("eats"));
console.log(animal.hasOwnProperty("eats"));
