function factorialize(num) {
  var returnNum = 1;
  for(var i=1; i<=num; i++){
    returnNum = returnNum * i;
  }

  return returnNum;
}

factorialize(5);

// Time = 2