function findDivCount(a, b, n){
   let sum = 0; 
   for(let i = a; a <= b; i++){
      if(i % n === 0 ){
         sum += i; 
        }
       
     }return sum; 
   } 
   findDivCount(2, 10, 3);