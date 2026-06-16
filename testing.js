let arr = [1, 2, 2, 3, 3];

// uniqueArr = arr.filter((item,index)=>{
//     if (arr.indexOf(item)==index) {
//         return item
//     }
//     return false

// })

let unique = [];

for (let i = 0; i< arr.length; i++) {
  let isunique = true;
  for (let j = 0; j < unique.length; j++) {
    if (unique[j] == arr[i]) isunique = false;
  }

  if(isunique) unique.push(arr[i]);
}

console.log(unique)
