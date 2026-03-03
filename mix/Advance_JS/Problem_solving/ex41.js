/* Task 1: Creating a Counter Using Closures

Create a function createCounter() that returns a function which increments and 
returns a counter value each time it is called. */
function createCounter() {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
}

/* Task 2: Rate Limiter Function

Create a function rateLimiter(fn, limit) that returns a new function. 
The returned function allows calling fn only once within a limit time in milliseconds. 
If it is called again before the limit is reached, it should return "Rate limit exceeded". */

function rateLimiter(fn, limit) {
  let lastAccess = 0;
  return function () {
    const now = Date.now();
    if (now - lastAccess >= limit) {
      lastAccess = now;
      return fn(...arguments);
    } else {
      return "Rate limit exceeded";
    }
  };
}

function sayHi() {
  console.log("Hi");
}
// let v = rateLimiter(sayHi, 2000);
// v();

/* Task 3: Memoization Function

Write a function memoize(fn) that returns a memoized version of fn. 
The memoized function should cache the results of function calls, 
and return the cached result if the same inputs are provided again. */

function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}
