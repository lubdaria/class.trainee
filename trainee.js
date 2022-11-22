let animal = {
  name: "Животное",
  eat() {
    console.log(`${this.name} ест.`);
  }
};

let rabbit = {
  __proto__: animal,
  eat() {
    this.__proto__.eat.call(this.__proto__); 
  }
};

let longEar = {
  __proto__: rabbit,
  eat() {
    this.__proto__.eat.call(this.__proto__); 
  }
};

longEar.eat();