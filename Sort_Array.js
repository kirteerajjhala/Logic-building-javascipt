
function sortAscending (arr){
 let newArr = [...arr]
    for(let i = 0 ; i<newArr.length -1 ; i++){
        for (let j = 0; j < arr.length; j++) {
        
            if (newArr[j]<newArr[j+1]) {
                let temp = newArr[j];
                newArr[j] = newArr[j+1]
                newArr[j+1] = temp
            }
        }
    }

    return newArr
}

let newArr = [1,3,2,9]
console.log(sortAscending(newArr))