/* Task 1: Create Inheritance Using Prototypes

Create a constructor Animal with a method makeSound(). 
Then create a constructor Dog that inherits from Animal and adds a method bark() */

function Animal() {}
Animal.prototype.makeSound = function () {
  return `Animal sound`;
};

function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.bark = function () {
  return `Woof!`;
};

/* Task 2: Shape and Rectangle Inheritance

Create a constructor function Shape that takes color as a parameter and has a method getColor() that returns the color.

Create another constructor Rectangle that inherits from Shape and adds properties width and height. 
Add a method getArea() to Rectangle that returns the area of the rectangle. */

function Shape(color) {
  this.color = color;
}

Shape.prototype.getColor = function () {
  return `${this.color}`;
};

function Rectangle(width, height, color) {
  this.width = width;
  this.height = height;
  this.color = color;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.getArea = function () {
  return this.height * this.width;
};

const shape1 = new Shape("red");
console.log(shape1.getColor());

const rec1 = new Rectangle(2, 3);
console.log(rec1.getArea());
