let arr = [1, 2, 3, 5]; // Missing 4
let n = arr.length + 1;
let total = (n * (n + 1)) / 2;
let sum = arr.reduce((a, b) => a + b, 0);

let missing = total - sum;
console.log(missing); // Output: 4


// arr.length + 1 isliye likha, kyunki agar ek number missing hai, to actual sequence me total numbers ek zyada hone chahiye.