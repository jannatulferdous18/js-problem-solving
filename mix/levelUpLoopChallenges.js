/*
1. Write a 'for' loop that loops through the array ["green tea", "black tea", "chai", "oolong tea"] and stops the loop when it finds '"chai"'
Store all teas before '"chai"' in a new array named selectedTeas
*/

let teas = ["green tea", "black tea", "chai", "oolong tea"];

let selectedTeas = new Array();

let chaiIndex;

for (let index = 0; index < teas.length; index++) {
  if (teas[index] === "chai") {
    chaiIndex = index;
    break;
  }
}
selectedTeas.push(teas.slice(0, chaiIndex));

// console.log(`Chai array: ${teas}`);

// console.log(`Selected teas array: ${selectedTeas}`);

/*
2. Write a 'for' loop that loops through the array "London" "New York", "paris", "Berlin"]' and skips "Paris"' Store the other cities in a new array named visitedCities'.
*/

let cities = ["London", "New York", "paris", "Berlin"];

let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "paris" || cities[i] === "Paris") {
    continue;
  }
  visitedCities.push(cities[i]);
}

// console.log(`Visited countries except Paris: ${visitedCities}`);

/*
3. Use a 'for-of' loop to iterate through the array '[1, 2, 3, 4, 5J' and stop when the number 4' is found.
Store the numbers before 4' in an array named 'smallNumbers.
*/

let numbers = [1, 2, 3, 4, 5];

let smallNumbers = [];

for (const num of numbers) {
  if (num === 4) {
    break;
  }
  smallNumbers.push(num);
}

// console.log(`Small numbers array: ${smallNumbers}`);

/*
4. Use a 'for-of" loop to iterate through the array ["chai", "green tea", "herbal tea", "black tea"|' and skip '"herbal tea"*.
Store the other teas in an array named 'preferredTeas.
*/

let teaMenu = ["chai", "green tea", "herbal tea", "black tea"];

let preferredTeas = [];

for (const tea of teaMenu) {
  if (tea === "herbal tea") {
    continue;
  }
  preferredTeas.push(tea);
}

// console.log(`Preferred Teas: ${preferredTeas}`);

/*
5. Use a 'for-in' loop to loop through an object containing city populations.
Stop the loop when the population of '"Berlin"' is found and store all previous cities' populations in a new object named 'cityPopulations'.
let citiesPopulation = {
"London": 8940000,
"New York": 8400000,
"Berlin": 3500000,
"Paris": 2200000
};
*/
let citiesPopulation = {
  London: 8940000,
  "New York": 7500000,
  Berlin: 3500000,
  Paris: 2200000,
};

let cityPopulations = {};

for (const city in citiesPopulation) {
  if (city === "Berlin") {
    break;
  }

  cityPopulations[city] = citiesPopulation[city];
}

// console.log(cityPopulations);

/*
6. Use a 'for-in' loop to loop through an object containing city populations.
Skip any city with a population below 3 million and store the rest in a new object named 'largeCities'.

let worldCities = {
"Sydney": 5000000,
"Tokyo": 9000000,
"Berlin": 3500000,
"Paris": 2200000
};
*/
let worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Paris: 2200000,
  Berlin: 3500000,
};

let largeCities = {};

for (const city in worldCities) {
  if (worldCities[city] < 3000000) {
    continue;
  }
  largeCities[city] = worldCities[city];
}

// console.log(largeCities);

/*

7. Write a 'forEach
loop that iterates through the array
'["earl grey", "green tea", "chai", "oolong tea"]'.
Stop the loop when ""chai"' is found, and store all 
previous tea types in an array named availableTeas.

*/

let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];
teaCollection.forEach((tea) => {
  if (tea === "chai") {
    return;
  }
  availableTeas.push(tea);
});
// console.log(availableTeas);

/*
8. Write a 'forEach' loop that iterates through the array
' ["Berlin", "Tokyo", "Sydney", "Paris"]',
Skip '"Sydney"' and store the other cities in a new 
array named 'traveledCities'.
*/

let cityList = ["Berlin", "Tokyo", "Sydney", "Paris"];

let traveledCities = [];

cityList.forEach((city) => {
  if (city === "Sydney") {
    return;
  }
  traveledCities.push(city);
});

// console.log(traveledCities);

/*
9. Write a 'for' loop that iterates through the array [2, 5, 7, 9]
Skip the value '7 and multiply the rest by 2. Store the results in a new array named doubledNumbers.
*/

let forLoop = [2, 5, 7, 9];

let doubledNumbers = [];

for (let i = 0; i < forLoop.length; i++) {
  if (forLoop[i] === 7) {
    continue;
  }
  doubledNumbers.push(forLoop[i] * 2);
}

// console.log(doubledNumbers);

/*
10. Use a for-of' loop to iterate through the array ["chai", "green tea", "black tea", "jasmine tea", "herbal tea" ]"
and stop when the length of the current tea name is. greater than 10.
Store the teas iterated over in an array named "shortTeas"

*/

let chaiList = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];

let shortTeas = [];

for (const chai of chaiList) {
  if (chai.length > 10) {
    break;
  }
  shortTeas.push(chai);
}
// console.log(shortTeas);

// My practice

let mapArr = [1, 2, 3, 4];
let ab = mapArr.map((a) => a * a);
// console.log(ab);

const squareNum = (arr) => arr.map((e1) => e1 * e1);

let a = squareNum([1, 2, 3, 4, 5]);
// console.log(a);

const filterEvenNumber = (arr) => arr.filter((num) => num % 2 == 0);
let b = filterEvenNumber([1, 2, 3, 4, 5, 6, 7, 8]);
// console.log(b);

let numbersSum = [1, 2, 3, -2, 5, -7];
let posNumber = numbersSum.filter((num) => num > 0);
let reduceSum = posNumber.reduce(
  (total, currentValue) => (total += currentValue),
  0
);

// console.log(reduceSum);

/* Sum of Positive Numbers

Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions 

*/

const sumPositiveNumbers = (arr) => {
  let positiveArr = arr.filter((num) => num > 0);
  return positiveArr.reduce(
    (posValue, currentValue) => (posValue += currentValue),
    0
  );
};

let total = sumPositiveNumbers([1, 2, 4, -9, -5]);
// console.log(total);

/* Task 4: Transform Array of Objects

Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions */

const getNames = (arr) => arr.map((nameElement) => nameElement.name);

let arrObj = [
  { name: "jf", gender: "F" },
  { name: "jannat", gender: "F" },
];

for (const element of arrObj) {
  //   console.log(element.name);
}

let n = arrObj.map((element) => element.name);
// console.log(n);

/* Task 5: Find the Longest Word

Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function */

const findLongestWord = (arr) => {
  let arrLen = arr.map((name) => ({ name, length: name.length }));
  let longWord = arrLen.reduce((prev, current) => {
    return prev.length > current.length ? prev : current;
  });
  return longWord.name;
};

let longWord = findLongestWord(["Jannatul", "Ferdous", "Muna"]);
// console.log(longWord);

/* Task 1: Using this in Objects

Create an object person with a method introduce() that uses this

additionally add properties of name & age that will result in Hi, my name is Hitesh and I am 19.5 years old on calling introduce()


Task 2: Function within a function

Write a function outer() that contains another function inner() and returns a value of 'Inner function called' on calling outer() */

const person = {
  name: "JF",
  age: 19.5,
  introduce() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old`);
  },
};

function outer() {
  function inner() {
    return `Inner function called`;
  }
  return inner();
}

console.log(outer());
