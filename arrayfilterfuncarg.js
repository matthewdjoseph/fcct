function dropElements(arr, func) {
  for(var i=0; i< arr.length; i++){
    if(!func(arr[i])){
      arr.splice(i,1);
      i--;
    }else{
      break;
    }
  }
  return arr;
}

dropElements([1, 2, 3, 4], function(n) {return n >= 3; });

// Time = 15