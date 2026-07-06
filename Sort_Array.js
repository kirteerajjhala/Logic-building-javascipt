let newArr = [1,3,2,9]
console.log(sortAscending(newArr))


// bubble sort
function sortAscending(newArr){
    let arr = [...newArr]
    for(let i = 0 ; i <newArr.length-1; i++){
        let isSwap = false;
        
        for(let j = 0 ; j < newArr.length - i-1; j++ ){
            
            if(arr[j]>arr[j+1]){
                
                arr[j] = arr[j] + arr[j+1];
                arr[j+1] = arr[j] - arr[j+1];
                arr[j] = arr[j] - arr[j+1];
                isSwap = true
            }

          
        }

          if(isSwap!==true){
                return arr
            }
    }
    
    return arr;
}