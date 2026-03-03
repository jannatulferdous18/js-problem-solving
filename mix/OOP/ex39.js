/* Task 1: Encapsulation Using Getters and Setters

Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). 
Use getters and setters to access and modify the _balance while ensuring the balance never goes negative. */

class BankAccount {
  constructor(balance = 0) {
    this._balance = balance;
  }

  get balance() {
    return this._balance;
  }

  set balance(amount) {
    if (amount < 0) {
      throw new Error("Balance cannot be negative");
    }
    this._balance = amount;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposit amount must be positive");
    }
    this.balance = this._balance + amount;
    return this._balance;
  }
  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Withdraw amount must be positive");
    }
    if (this._balance - amount < 0) {
      throw new Error("Insufficient funds");
    }

    this.balance = this._balance - amount;
    return this._balance;
  }
}

/* Task 2: Polymorphism with Method Overriding

Create a class Shape with a method area() that returns 0. 
Create two subclasses Circle and Rectangle that override the area() method to calculate the area of a circle and a rectangle, respectively. */

class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
  }
  area() {
    return this.length * this.width;
  }
}

/* const b1 = new BankAccount();
b1.balance = 100;
console.log("First: " + b1.balance);

b1.withdraw(50);
console.log("Second " + b1.balance);

b1.deposit(500);
console.log("Third " + b1.balance); */

const cir = new Circle(10);
console.log(cir.area());

const rec = new Rectangle(10, 10);
console.log(rec.area());
