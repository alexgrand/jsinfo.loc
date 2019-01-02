/*
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
*/

const schedule = {};
const isEmpty = function hasProperty(obj) {
  return !Object.keys(obj).length;
};
console.log(isEmpty(schedule));
schedule['8:30'] = 'get up';
console.log(isEmpty(schedule));
