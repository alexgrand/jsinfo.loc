/* eslint-disable no-console */
/* eslint-disable no-alert */
/*
Create a constructor function Calculator that creates objects with 3 methods:

read() asks for two values using prompt and remembers them in object properties.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties.
*/
const Calculator = function newCalculator() {
  this.a = 0;
  this.b = 0;
  this.read = function readVals() {
    // eslint-disable-next-line no-undef
    this.a = +prompt('value a');
    // eslint-disable-next-line no-undef
    this.b = +prompt('value b');
  };
  this.sum = function sumVals() {
    return this.a + this.b;
  };
  this.mul = function mulVals() {
    return this.a * this.b;
  };
};

const calculator = new Calculator();
calculator.read();
console.log(`Sum=${calculator.sum()}`);
console.log(`Mul=${calculator.mul()}`);
