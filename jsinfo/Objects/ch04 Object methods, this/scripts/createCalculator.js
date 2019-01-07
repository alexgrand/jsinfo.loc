/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/*
Task:
Create an object calculator with three methods:

read() prompts for two values and saves them as object properties.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.
*/

const calculator = {
  read() {
    this.a = +prompt('value 1');
    this.b = +prompt('value2');
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
