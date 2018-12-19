/* eslint-disable no-continue */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
// определение простых чисел;
const isPrime = function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};
const showPrimes = function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    console.log(i);
  }
};

console.log(showPrimes(100));
// Function min(a, b)
const min = function min(a, b) {
  return (a > b) ? b : a;
};

console.log(min(1, 1));
