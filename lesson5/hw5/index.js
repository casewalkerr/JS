function findDivCount(a, b, n){
   let sum = 0; 
   for(let i = a; a <= b; i++){
      if(i % n === 0 ){
         sum +=1; 
        }
       
     }return sum; 
   } 