// Prime → divide only by 1 and itself
// Non-prime → divide by other numbers also 


let num = 3;
let isPrime = true;

if (num <= 1) {
  isPrime = false;  // one or negative numbers prime nahi hote
} else {
  for (let i = 2; i <num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  console.log(num + " is a Prime number");
} else {
  console.log(num + " is NOT a Prime number");
}



let n = 20;

for(let num=2; num<=n; num++){

    let prime=true;

    for(let i=2;i<=Math.sqrt(num);i++){

        if(num%i===0){
            prime=false;
            break;
        }
    }

    if(prime){
        console.log(num);
    }
}