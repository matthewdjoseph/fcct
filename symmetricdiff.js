function sym(args) {
  var returnArray = new Array();

  for(var i=0; i< arguments.length; i++){
    for(var j=0; j< arguments[i].length; j++){
      if(returnArray.includes(arguments[i][j])){
        returnArray.splice(returnArray.indexOf(arguments[i][j]),1);
      }else{
        returnArray.push(arguments[i][j]);
      }
    }
  }
  console.log(returnArray.sort((a,b) => a - b));
  return returnArray.sort((a,b) => a - b);
}

sym([1, 2, 3, 3], [5, 2, 1, 4]);

// Time = 18