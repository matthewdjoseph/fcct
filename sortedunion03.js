function uniteUnique(arr) {
    var args = Array.prototype.slice.call(arguments);
    var newArray = [];
  
    for(var i=0; i< args.length; i++){
      for(var j=0; j< args[i].length; j++){
        
        if(!newArray.includes(args[i][j])){
          newArray.push(args[i][j]);
        }
      }
    }
  
    return newArray;
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

  // Time = 9