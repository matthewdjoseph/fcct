function pairElement(str) {
    var input = str.split('');
    var dnaPairs = new Array();
  
    for(var i=0; i< input.length; i++){
      if(input[i] == "A"){
        dnaPairs.push(['A', 'T']);
      }else if(input[i] == "T"){
        dnaPairs.push(['T', 'A']);
      }else if(input[i] == "C"){
        dnaPairs.push(['C', 'G']);
      }else if(input[i] == "G"){
        dnaPairs.push(['G', 'C']);
      }
    }
  
    return dnaPairs;
  }
  
  pairElement("GCG");

  // Time = 4