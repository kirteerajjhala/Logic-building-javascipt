let arr =  [1 ,3  ,4 ,5 ,6 , 10 ];
let missingArr = []
let minNum = Math.min(...arr);
let maxNum = Math.max(...arr);

for (let index = minNum; index <=maxNum; index++) {
   let missing = arr.includes(index)
   if (!missing) {
      missingArr.push(index)
   }

   
}

console.log(missingArr)