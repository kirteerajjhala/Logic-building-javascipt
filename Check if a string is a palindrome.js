// Palindrome wo word, number, ya string hota hai jo ulta padhne par bhi same hi rahe.

let str = "madam";
let reversed = str.split("").reverse().join("");

if (str === reversed) {
  console.log("It is a palindrome");
} else {
  console.log("It is not a palindrome");
}


//Without any method (manual check)
let isPalindrome = true;

for (let i = 0; i < str.length / 2; i++) {
  if (str[i] !== str[str.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log("It is a palindrome");
} else {
  console.log("It is not a palindrome");
}
