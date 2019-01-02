/*
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
*/

const schedule = {};
// need to be checked for Performance v1 and v2
const isEmpty = function hasProperty(obj) {
  // v1
  return !Object.keys(obj).length;

  // v2
  // for (const key in obj) {
  //   return false;
  // }
  // return true;
};
console.log(isEmpty(schedule));
schedule['8:30'] = 'get up';

console.time('isEmpty');
console.log(isEmpty(schedule));
console.timeEnd('isEmpty');
