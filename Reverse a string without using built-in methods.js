// let name = "kirteeraj jhala"
// let reverseName = ""

// for (let i = name.length-1; i>=0; i--) {
   
//    reverseName+=name[i]
// }

// console.log(reverseName)


// ek ek word ko reverse krna hai 

let str = "my name is kirteeraj jhala"
let word = str.split();
let reverseStr =""
word.forEach((item)=>{

    for(let i =item.length-1 ; i>=0; i--){
        reverseStr += item[i];
    }

    reverseStr+=" "
})

console.log(reverseStr)
