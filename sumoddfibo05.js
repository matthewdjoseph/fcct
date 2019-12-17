function sumFibs(num) {
  var a=1, b=0, tempNum, returnVar = 0;

  for(var i=1; i<=num; i++){
    tempNum = a;
    a = a + b;
    b = tempNum;
    if(b > num){
      break;
    }else if(b%2!=0){
      returnVar += b;
    }
  }
  return returnVar;
}

sumFibs(75025);

// Time = 28