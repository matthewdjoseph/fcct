function sumFibs(num) {

    if(num <= 0){
      return 0;
    }
  
    var fib = new Array();
    fib[0] = 0;
    fib[1] = 1;
  
    var sum = fib[0] + fib[1];
  
    for(var i=2; i<= num; i++){
      fib[i] = fib[i-1] + fib[i-2];
      if(Math.abs(fib[i] % 2) == 1
          && fib[i] <= num){
        sum += fib[i];
        console.log(sum);
      }
    }
  
    return sum;
  }
  
  sumFibs(10);

  // Time = 13