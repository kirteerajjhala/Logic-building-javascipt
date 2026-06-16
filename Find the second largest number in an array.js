let arr = [12 ,3 ,14 ,45, 6];
let newArr = []
let temp =0;
for (let i = 0; i < arr.length; i++) {
    
    for (let j = 0; j < arr.length; j++) {
        
        if (arr[j]<arr[j+1]) {
             temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }

    }
    
}
console.log(arr[1])


// method 2
let arr = [10, 20, 15, 18];
let largest =0, secondLargest = 0;

for(let num of arr){
    
    if(num>largest){
        secondLargest = largest;
        largest = num;
    }else if (num > secondLargest || num !==largest){
        secondLargest = num
    }
}

console.log(largest , " " , secondLargest)