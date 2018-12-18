// Output even numbers in the loop 2 to 10
for (let i = 0; i <= 10; i++) {
  if (!(i % 2)) console.log(i);
}
// Replace 'for' with 'while'
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
// repeat until the input is correct
let num;

do {
  num = prompt('Enter a number greater than 100?', 0);
} while (num <= 100 && num);

// output prime numbers
const n = 10;
nextPrime:
for (let y = 2; i <= n; i++) { // for each i...
  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert(i); // a prime
}
