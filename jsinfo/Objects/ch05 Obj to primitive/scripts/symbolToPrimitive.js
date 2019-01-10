/* eslint-disable no-console */
const user = {
  name: 'John',
  money: 1000,

  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint === 'string' ? `{name: "${this.name}"}` : this.money;
  },
};

console.log(`some  ${user}`);
console.log(user);
console.log(+user);
console.log(user + 500);
