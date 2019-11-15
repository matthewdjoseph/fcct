function addTogether() {

  for(var i=0; i< arguments.length; i++){
    if(!Number.isInteger(arguments[i])){
      return undefined;
    }
  }

  if(arguments.length > 1){
    return arguments[0] + arguments[1];
  }else if(arguments.length == 1){
    return function(n){
      if(!Number.isInteger(n)){
        return undefined;
      }
      return n + 2;};
  }else{
    return undefined;
  }

  return false;
}

addTogether(2)(3);

// Time = 27