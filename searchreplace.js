function myReplace(str, before, after) {
    var sentenceArray = str.split(' ');
  
    sentenceArray.forEach(function(e, index, sentenceArray){
      if(e.toLowerCase() == before.toLowerCase()){
        if(e[0] == e[0].toUpperCase()){
          var tempAfter = after.split('');
          tempAfter[0] = tempAfter[0].toUpperCase();
          after = tempAfter.join('');
          sentenceArray[index] = after;
        }else{
          sentenceArray[index] = after.toLowerCase();
        }
      }
    });
  
    return sentenceArray.join(' ');
  }
  
  myReplace("A quick brown fox Jumped over the lazy dog", "jumped", "leaped");

  // Time = 20