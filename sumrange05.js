function sumAll(arr) {

  var rangeArray = arguments[0].sort((a,b) => a - b);
  var returnSum = 0;
  for(var i=rangeArray[0]; i<= rangeArray[1]; i++){
    returnSum += i;
  }

  return returnSum;
}

sumAll([5, 10]);

// Time = 3.5