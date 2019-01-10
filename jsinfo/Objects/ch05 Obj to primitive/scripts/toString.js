/* eslint-disable no-console */
/*
If there’s no Symbol.toPrimitive then JavaScript tries to find them and try in the order:

toString -> valueOf for “string” hint.
valueOf -> toString otherwise.
*/
const user = {
  name: 'John',
  money: 1000,

  // for hint='string'
  toString() {
    return `{name: "${this.name}}`;
  },

  // for hint='number' or default'
  valueOf() {
    return this.money;
  },
};
console.log(user);
console.log(+user);
console.log(user + 500);
