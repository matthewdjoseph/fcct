function binaryAgent(str) {
  var binaryArray = str.split(' ');
  var alphaArray = new Array();

  for(var i=0; i< binaryArray.length; i++){
    alphaArray.push(String.fromCharCode(parseInt(binaryArray[i],2)));
  }
  return alphaArray.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

// Time = 8