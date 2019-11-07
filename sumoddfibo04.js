function sumFibs(num) {
    if(num < 2){
      return num;
    }
  
    var fib = 0;
    var prev = 0;
    var curr = 1;
  
    while(curr <= num){
      if(curr % 2 !== 0){
        fib += curr;
      }
  
      curr += prev;
      prev = curr - prev;
    }
  
    return fib;
  }
  
  sumFibs(4);

// Time = 15