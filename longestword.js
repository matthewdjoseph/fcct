function findLongestWordLength(str) {

  var sentenceArray = str.split(' ');
  var returnLength = sentenceArray[0].length;

  for(var i=0; i< sentenceArray.length; i++){
    if(sentenceArray[i].length > returnLength){
      returnLength = sentenceArray[i].length;
    }
  }

  return returnLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// Time = 2