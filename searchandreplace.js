function myReplace(str, before, after) {
    var firstLetter = before[0];
    
    if(before[0].toLowerCase() == firstLetter){
      str = str.replace(before, after);
    }else{
      var newArr = after.split('');
      newArr[0] = after[0].toUpperCase();
      after = newArr.join('');
      str = str.replace(before, after);
    }  
  
    return str;
  }
  
  console.log(myReplace("Let us go to the store", "store", "mall"));

  // Time = 12