let str = "Reverse words in a sentence";
let empty = "";

str.toLowerCase().split(" ").forEach((item) => {
  for (let i = item.length - 1; i >= 0; i--) {
    empty += item[i];
  }
  empty += " ";
});

console.log(empty.trim()); // ✅ trim() se last space hat jaayega
