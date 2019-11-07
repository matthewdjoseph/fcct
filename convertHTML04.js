function convertHTML(str) {
    var sentenceArray = str.split('');
    var specialChars = {
      '&':'&amp;',
      '<':'&lt;',
      '>':'&gt;',
      '"':'&quot;',
      "'":'&apos;'
    };
  
    sentenceArray.forEach(function(c, index){
      if(specialChars.hasOwnProperty(c)){
        sentenceArray[index] = specialChars[c];
      }
    })
  
  
    return sentenceArray.join('');
  }
  
  convertHTML("Dolce & Gabbana");

// Time = 9