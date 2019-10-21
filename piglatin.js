function translatePigLatin(str) {
    var vowelArray = ['a','e','i','o','u'];
  
    var consenantIndex = 0;
    for(var i=0; i< str.length; i++){
      if(vowelArray.includes(str[i])){
        consenantIndex = i;
        break;
      }
    }
  
    var consenant = str.substring(0,consenantIndex);
  
    var restOfWord = str.substring(consenantIndex, str.length);
  
    if(vowelArray.includes(str[0])){
      str += "way";
    }else{
      str = restOfWord + consenant + "ay";
    }
  
    return str;
  }
  
  console.log(translatePigLatin("consonant"));

  // Time = 15