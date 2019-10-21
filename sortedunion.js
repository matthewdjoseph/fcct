function uniteUnique(arr) {
    var uniqueValuesArray = new Array();
  
    for(var i=0; i< arguments.length; i++){
      var singleArgument = arguments[i];
  
      for(var j=0; j< singleArgument.length; j++){
        if(!uniqueValuesArray.includes(singleArgument[j])){
          uniqueValuesArray.push(singleArgument[j]);
        }
      }
  
    }
  
    return uniqueValuesArray;
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

  // Time = 6