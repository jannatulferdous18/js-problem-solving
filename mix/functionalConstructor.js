function Pets(name, number) {
  if (!new.target) {
    throw new Error("You must use 'new' with Pets()");
  }
  this.name = name;
  this.number = number;
}

Pets.prototype.nature = function () {
  return `I have ${this.number} cats and his name is ${this.name}`;
};

Pets.prototype.friendly = true;
Pets.prototype.color = "white and black";

let jhunjhuni = new Pets("jhunjhun", 1);
console.log(jhunjhuni.nature());
console.log(jhunjhuni.friendly);
console.log(jhunjhuni.color);
