function pairElement(str) {
  var returnArray = new Array();

  str.split('').forEach(function(e){
    if(e == "G"){
      returnArray.push(["G","C"]);
    }else if(e == "C"){
      returnArray.push(["C","G"]);
    }else if(e == "A"){
      returnArray.push(["A","T"]);
    }else if(e == "T"){
      returnArray.push(["T","A"]);
    }
  });

  return returnArray;
}

pairElement("GCG");

// Time = 4