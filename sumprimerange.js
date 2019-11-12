function test_prime(n){
    if (n===1){
      return false;
    }
    else if(n === 2){
      return true;
    }else{
      for(var x = 2; x < n; x++){
        if(n % x === 0){
          return false;
        }
      }
      return true;  
    }
  }
  
  function sumPrimes(num) {
  
    var rangeArray = new Array();
  
    for(var i=2; i<= num; i++){
      rangeArray.push(i);
    }
  
    var primeArray = new Array();
  
    rangeArray.forEach(function(n){
      if(test_prime(n)){
        primeArray.push(n);
      }
    })
  
    return primeArray.reduce((a,b) => a+b);
  }
  
  sumPrimes(10);

// Time = 26;