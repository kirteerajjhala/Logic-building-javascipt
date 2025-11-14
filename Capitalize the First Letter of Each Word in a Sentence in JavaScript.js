let str = "capitalize the first letter of each word in a sentence in javaScript"

let newStr = str.split(" ").map((item)=>{
   return item.charAt(0).toUpperCase() + item.slice(1)
})

console.log(newStr.join(" "))