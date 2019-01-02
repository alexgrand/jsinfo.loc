/*
Write the code to sum all salaries and store in the variable sum.
Should be 390 in the example.

If 'salaries' is empty, then the result must be 0.
*/
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
const sumSalaries = function sum(obj) {
  const salariesArr = Object.values(obj);
  if (!salariesArr.length) return 0;

  return salariesArr.reduce((acc, curValue) => acc + curValue);
};

console.log(sumSalaries(salaries));
