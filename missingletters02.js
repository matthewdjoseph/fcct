function fearNotLetter(str) {
  var tempArray = str.split('');

  tempArray.forEach(function(n,i){
    tempArray[i] = n.charCodeAt(0);
  })

  var index = 0;
  for(var i=tempArray[0]; i< tempArray[tempArray.length-1]; i++){
    if(tempArray[index] != i){
      return String.fromCharCode(i);
    }
    index++;
  }
  return undefined;
}

fearNotLetter("abce");

// Time = 8