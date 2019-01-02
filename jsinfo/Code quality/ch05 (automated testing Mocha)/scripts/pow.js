const powSpec = {};

powSpec.pow = function pow(x, n) {
  if (n < 0) return NaN;
  if (Math.round(n) !== n) return NaN;

  // let result = 1;

  // for (let i = 0; i < n; i += 1) {
  //   result *= x;
  // }

  // return result;
  // new implementation with ** operator

  return x ** n;
};
module.exports = powSpec;
