let str = "capitalize the first letter of each word in a sentence in javaScript"

let newStr = str.split(" ").map((item)=>{
   return item.charAt(0).toUpperCase() + item.slice(1)
})

console.log(newStr.join(" "))



//////////////////////////////////////////////////////////
let res= ""
let word = "";

for(let i =0 ; i<str.length; i++){
    if(str[i]===" "){
   word = word[0].toUpperCase() + word.slice(1);
      res+=word + " ";
      word="";
      
    }else{
        word+=str[i];
    }
    
    console.log(word)

}

res += word[0].toUpperCase() + word.slice(1);

console.log(res)