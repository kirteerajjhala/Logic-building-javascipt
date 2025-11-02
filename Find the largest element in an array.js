
let arr = [3 ,5 ,7 ,1, 4 ,11]
 let num =0;
arr.forEach((item)=>{
    
    if (item>num) {
        num=item;
    }
})

console.log(num)