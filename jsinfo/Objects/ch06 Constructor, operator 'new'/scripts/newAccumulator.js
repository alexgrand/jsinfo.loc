/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
/*
Create a constructor function Accumulator(startingValue).

Object that it creates should:

Store the “current value” in the property value.
The starting value is set to the argument of the constructor startingValue.
The read() method should use prompt to read a new number and add it to value.
In other words, the value property is the sum of all user-entered values with
the initial value startingValue
 */
const Accumulator = function newAcc(startingValue) {
  this.value = startingValue;
  this.read = function readVal() {
    this.value += +prompt('add value', 0);
  };
};
const accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);
