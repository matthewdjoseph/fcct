function sumPrimes(num) {

    if(num<=1){
      return 0;
    }else{
  
      var sum = 0;
  
      for(var i=2; i<= num; i++){
        if(num % i == 0){
          sum += i;
        }console.log(sum);
      }
  
      return sum;
    }
  }
  
  sumPrimes(977);

  // Time = 45
  // Not properly understanding the problem before attempting a solution
  // I should've gotten a handle on prime numbers before coding anything, I think.