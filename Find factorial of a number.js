let num = 5;
let fact = 1;

for (let i = 1; i <= num; i++) {
  fact = fact * i;
}

console.log("Factorial is:", fact);


function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
