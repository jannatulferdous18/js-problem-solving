/* Task 1: Async-Await with Promise.all

Create two functions fetchUser() and fetchPosts(), both returning promises that resolve in 1 second.

Use async-await and Promise.all to fetch both simultaneously and log the results as part of fetchAllData() */

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User data");
    }, 1000);
  });
}

function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Posts data");
    }, 1000);
  });
}

async function fetchAllData() {
  try {
    const [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);
    console.log(user);
    console.log(posts);
  } catch (error) {
    console.error("Error in fetching data", error);
  }
}

// fetchAllData();
/* 
Task 2: Error Handling in Async/Await with Promise.all

Write two functions fetchSuccess() and fetchFailure(), 
where fetchSuccess() returns a promise that resolves successfully after 1 second, 
and fetchFailure() returns a promise that rejects with an error after 1 second.

Create a function handlePromises() that calls both functions using Promise.all 
and handles success and failure cases. */

function fetchSuccess() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success");
    }, 1000);
  });
}

function fetchFailure() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error occurred");
    }, 1000);
  });
}

async function handlePromises() {
  try {
    const [success, failure] = await Promise.all([
      fetchSuccess(),
      fetchFailure(),
    ]);
    console.log(success);
  } catch (error) {
    console.log(error);
  }
}
handlePromises();

/* Task 3: Timeout with Async/Await and Promise.race

Create a function fetchWithTimeout(promise, timeout) that takes a promise 
and a timeout value in milliseconds. 
Use Promise.race() to return the result of the promise if it resolves within the timeout, 
otherwise return "Timeout exceeded".*/

function fetchWithTimeout(promise, timeout) {
  const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("'Timeout exceeded'"));
    }, timeout);
  });
  return Promise.race([promise, timeoutPromise]);
}

function fetchData() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("Data fetched"), 3000)
  );
}
