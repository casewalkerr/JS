function getPrimes(n){
   nextPrime: for (let i = 2; i <= n; i++){
        for(let j = 2; J <= i; J++ ){
        if(i % j === 0)
        continue nextPrime;
    }
    console.log(i);
 } 
}
