/* Task 1: Creating a Simple Generator

Create a generator function numberGenerator() that yields numbers from 1 to 3. */

function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

// const gen = numberGenerator();
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

/* Task 2: Create a Custom Iterator

Create a custom iterator called rangeIterator(start, end) 
that returns an object that iterates over numbers from start to end.

Each call to .next() should return the next number in the range until it reaches end. */

function rangeIterator(start, end) {
  let len = end - start;
  for (let current = start; current <= len; current++) {
    if (current < end) {
      return { value: current, done: true };
    } else {
      return { value: undefined, done: false };
    }
  }
}

let gen = rangeIterator(3, 6);
console.log(gen.next());
console.log(gen.next());
