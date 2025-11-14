let str = "Find the Longest Word in a String kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk in JavaScript"
let LongestLength ="";
// str.split(" ").forEach((num)=>{
//     if (num.length>LongestLength.length) {
//         LongestLength=num
//     }
// })

// console.log(LongestLength)

 LongestLength =  str.split(" ").reduce((long , word)=>{
    return word.length>long.length ? word : long
} , "")

console.log(LongestLength)