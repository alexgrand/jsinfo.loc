/* eslint-disable no-console */
// Symbols are skipped by for…in
const id = Symbol('id');
const user = {
  name: 'John',
  age: 30,
  [id]: 123,
};

// eslint-disable-next-line guard-for-in
// eslint-disable-next-line no-restricted-syntax
// for (const key in user) console.log(key); // name, age (no symbols)

// Object.values also doesn't find Symbol
// console.log(Object.values(user));

// // the direct access by the symbol works
// console.log('Direct: ' + user[id]);

// In contrast, Object.assign copies both string and symbol properties:
// const clone = Object.assign({}, user);
// console.log(clone[id]);

// Also operator spread (...) copies symbol properties
const clone = { ...user };
console.log(clone[id]);
