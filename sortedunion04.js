function uniteUnique(arr) {
  var argArray = [].slice.call(arguments);
  var returnArray = new Array();

  argArray.forEach(function(tempArray){
    tempArray.forEach(function(num){
      if(!returnArray.includes(num)){
        returnArray.push(num);
      }
    });
  });

  return returnArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// Time = 9.5