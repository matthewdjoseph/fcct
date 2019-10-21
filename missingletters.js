function fearNotLetter(str) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var alphabetArray = alphabet.split('');
    var beginning = str[0];
    var end = str[str.length - 1];
    var strArray = str.split('');
  
    var newStr = alphabet.substring(alphabet.indexOf(beginning), alphabet.indexOf(end) + 1);
  
    for(var i=0; i< newStr.length; i++){
      if(!strArray.includes(newStr[i])){
        return newStr[i];
      }
    }
  
    return undefined;
  }
  
  console.log(fearNotLetter("stvwx"));

  // Time = 9