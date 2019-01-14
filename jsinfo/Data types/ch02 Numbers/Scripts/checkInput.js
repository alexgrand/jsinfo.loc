const readNumber = function readNum() {
  const value = prompt('put number');
  console.log(typeof +value);
  console.log(typeof value);
  
  // if (typeof value !== 'number') {
  //   readNumber();
  // }
  return value;
};
console.log(readNumber());
