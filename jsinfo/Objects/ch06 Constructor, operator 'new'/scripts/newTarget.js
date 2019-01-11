/* eslint-disable no-console */
/*
Inside a function, we can check whether it was called with new or without it,
using a special new.target property.

It is empty for regular calls and equals the function if called with new
*/
const User = function newUser(name) {
  if (!new.target) {
    return new User(name);
  }
  this.name = name;
  return this;
};

const john = User('John');
console.log(john.name);
