const Car = class {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
  start() {
    console.log(`${this.brand} -start!`);
  }
  stop() {
    console.log(`${this.brand} -stop!`);
  }
  static discount() {
    console.log('Discount ');
  }
  set rating(value) {
    this.score = value;
  }
  get rating() {
    return this.score;
  }
};

const tesla = new Car('Tesla', 'red');
console.log(tesla);
 