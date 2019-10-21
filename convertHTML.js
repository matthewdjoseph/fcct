function convertHTML(str) {
    // &colon;&rpar;
    var specialCharsMapObject = {
      '&':'&amp;',
      '<':'&lt;',
      '>':'&gt;',
      '"':'&quot;',
      "'":'&apos;'
    }
  
    var stringArray = str.split('');
    
    for(var i=0; i< stringArray.length; i++){
        if(Object.keys(specialCharsMapObject).includes(stringArray[i])){
            stringArray[i] = specialCharsMapObject[stringArray[i]];
        }
    }
  
    return stringArray.join('');
  }
  
  console.log(convertHTML('Stuff in "quotation marks"'));
