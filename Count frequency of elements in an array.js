let arr = [1, 2, 2, 3, 3];
let freq = {};


arr.forEach((itme)=>{

    if (freq[itme]) {
        
        freq[itme]++;
    }else{

        freq[itme] =1;
    }
})

console.log(freq)