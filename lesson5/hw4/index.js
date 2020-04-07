function compareSums(a, b, c, d){
    if(sum(a, b)> sum(c, d)){
        return true;
    }else{
        return false;
    }
    function sum(s, f){
        let result = 0;
        for(let i = s; i <= f;i++){
            result+=i;
        }
    }
}