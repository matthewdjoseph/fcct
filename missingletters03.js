function fearNotLetter(str) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var alphabetArray = alphabet.split('');
    var strArray = str.split('');
    var newStr = "";
  
    var begin = alphabetArray.indexOf(strArray[0]);
    var end = alphabetArray.indexOf(strArray[str.length-1]);
    var correctStringArray = alphabet.substring(begin, end).split('');
  
    for(var i=0; i< correctStringArray.length; i++){
      if(!strArray.includes(correctStringArray[i])){
        newStr += correctStringArray[i];
      }
    }
    if(newStr.length >0){
      return newStr;
    }else{
      return undefined;
    }
  
    return newStr;
  }
  
  console.log(fearNotLetter("abce"));

  // Time = 15