/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
*/

let teaFlavors = ["green tea", "black tea", "oolong tea"];
// let teaFlavorsArr = new Array("green tea", "black tea", "oolong tea");

let firstTea = teaFlavors[0];

console.log(firstTea);

/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
   Access the third element in the array and store it in a variable named `favoriteCity`.
*/

let cities = new Array("London", "Tokyo", "Paris", "New York");

let favoriteCity = cities[2];

console.log(favoriteCity);

/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
   Change the second element of the array to `"jasmine tea"`.
*/

let teaTypes = ["herbal tea", "white tea", "masala chai"];

teaTypes[1] = "jasmine tea";

console.log(teaTypes);

/* 
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
   Add `"Berlin"` to the array using the `push` method.
*/

let citiesVisited = new Array("Mumbai", "Sydney");

// citiesVisited[2] = "Berlin";

// citiesVisited[citiesVisited.length] = "Berlin";

citiesVisited.push("Berlin");

console.log(citiesVisited);

/* 
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
   Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/

let teaOrders = new Array("chai", "iced tea", "matcha", "earl grey");

let lastOrder = teaOrders.pop(3);

// let lastOrder = teaOrders[teaOrders.length - 1];

console.log(lastOrder);

/* 
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/

let popularTeas = new Array("green tea", "oolong tea", "chai");

let softCopyTeas = popularTeas;

console.log(`Soft copy: ${softCopyTeas}`);

/* 
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/

let topCities = new Array("Berlin", "Singapore", "New York");

let hardCopyCities = [...topCities];

let topCitiesArr = topCities.pop(2);

console.log(`Top cities: ${topCities}`);
console.log(`Hard copy cities: ${hardCopyCities}`);

/* 
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/

let europeanCities = new Array("Paris", "Rome");

let asianCities = new Array("Tokyo", "Bangkok");

let worldCities = [...europeanCities, ...asianCities];
// let worldCities = [europeanCities.concat(asianCities)];

console.log(`World Cities: ${worldCities}`);

/* 
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/

let teaMenu = new Array("masala chai", "oolong tea", "green tea", "earl grey");

let menuLength = teaMenu.length;

console.log(`Tea Menu length: ${menuLength}`);

/* 
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/

let cityBucketList = new Array("Kyoto", "London", "Cape Town", "Vancouver");

let isLondonInList = cityBucketList.includes("London");

console.log(`London exists in the list: ${isLondonInList}`);

let fruits = ["apple", "banana", "cherry", "date"];

let indexToRemove = 2;

let newFruitsSlice = [
  ...fruits.slice(0, indexToRemove),
  ...fruits.slice(indexToRemove + 1),
];

console.log(`Fruits : ${fruits}`);

console.log(`Slice output: ${newFruitsSlice}`);

/* Slice and Splice */

let spliceRes = fruits.splice(2, 1);

console.log(`Using Splice : ${fruits}`);

console.log(`Using Spl : ${spliceRes}`);

let arr3 = [50, 60, 70, 80];

let arr4 = arr3.slice(1, 3);

console.log(`Arr3: ${arr3}, Arr4: ${arr4}`);

// Reverse an array

let originalArr = new Array(10, 20, 30, 40);

let reverseArr = originalArr.reverse();

console.log(`Reverse Array: ${reverseArr}`);
