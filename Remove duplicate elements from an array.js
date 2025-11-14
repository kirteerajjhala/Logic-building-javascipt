let arr = [ 1 ,3 ,4 ,1 ,5]
let uniqueArr= [];


// method 1 
arr.forEach((element)=>{
    if (!uniqueArr.includes(element)) {
        uniqueArr.push(element)
    }
})
console.log(uniqueArr)

// method 2 

uniqueArr = arr.filter((item,index)=>{
    if (arr.indexOf(item)==index) {
        return true
    }
    return false
})

console.log(uniqueArr)



 arr = [3, 5, 7, 3, 5, 1, 4];
 uniqueArr = [];

for (let i = 0; i < arr.length; i++) {
  // flag se check karenge ki element duplicate hai ya nahi
  let isDuplicate = false;

  // inner loop se check karte hain uniqueArr me ye element already hai ya nahi
  for (let j = 0; j < uniqueArr.length; j++) {
    if (arr[i] === uniqueArr[j]) {
      isDuplicate = true;
      break;
    }
  }

  // agar duplicate nahi mila to uniqueArr me push kar do
  if (!isDuplicate) {
    uniqueArr[uniqueArr.length] = arr[i];
  }
}

console.log(uniqueArr);



for (let i = 0; i < arr.length; i++) {
   
   if (uniqueArr.indexOf(arr[i])===-1) {
      uniqueArr.push(arr[i])
   }
   
}

console.log(uniqueArr)