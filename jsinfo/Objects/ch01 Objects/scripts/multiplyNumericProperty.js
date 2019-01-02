/*
Create a function multiplyNumeric(obj) that multiplies all numeric properties of obj by 2.

Please note that multiplyNumeric does not need to return anything.
It should modify the object in-place.

P.S. Use typeof to check for a number here.
P.S. never reassign object properties in real code
*/
const menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};
const multiplyNumeric = function multNum(obj) {
  // v1
  // for (const key in obj) {
  //   if (typeof obj[key] === 'number') {
  //     obj[key] *= 2;
  //   }
  // }

  // v2
  Object.entries(obj).forEach((keyValue) => {
    if (typeof keyValue[1] === 'number') {
      // eslint-disable-next-line no-param-reassign
      obj[keyValue[0]] *= 2;
    }
  });
};
console.log(menu);
multiplyNumeric(menu);
console.log(menu);
