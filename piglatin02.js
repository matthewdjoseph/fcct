function translatePigLatin(str) {
    var vowels = ['a','e','i','o','u'];
    var count = 0;
    var vowelFound = false;
  
    if(vowels.includes(str[0])){
      return str += "way";
    }else{
      for(var i=1; i< str.length; i++){
        if(vowels.includes(str[i])){
          var tempStr = str.substring(0,i);
          var newStr = str.substring(i,str.length) + tempStr + "ay";
          vowelFound = true;
          return newStr;
        }else{
          vowelFound = false;
        }
      }
      if(!vowelFound){
        return str += "ay";
      }
    }
  
  }
  
  console.log(translatePigLatin("rhythm"));

  // Time = 15