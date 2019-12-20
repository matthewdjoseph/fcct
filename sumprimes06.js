function sumPrimes(num) {
  var sum = 0;
  for(var i=0; i<= num; i++){
    if(isPrime(i)){
      sum += i;
    }
  }

  return sum;
}

function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

sumPrimes(10);

// Time = 1.5