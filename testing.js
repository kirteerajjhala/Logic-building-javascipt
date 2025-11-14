let arr = [ 1 ,3 ,4 ,1 ,5]
let uniqueArr= [];

for (let i = 0; i < arr.length; i++) {
   
   if (uniqueArr.indexOf(arr[i])===-1) {
      uniqueArr.push(arr[i])
   }
   
}

console.log(uniqueArr)