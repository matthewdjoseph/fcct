function pairElement(str) {
    var multiArray = new Array();
    var strArray = str.toUpperCase().split('');
  
    for(var i=0; i< str.length; i++){
      switch(str[i]){
        case "A":
        multiArray.push(['A','T']);
        break;
      case "T":
        multiArray.push(['T','A']);
        break;
      case "C":
        multiArray.push(['C','G']);
        break;
      case "G":
        multiArray.push(['G','C']);
        break;
      }
    }
  
  
    return multiArray;
  }
  
  pairElement("GCG");

  // Time = 6