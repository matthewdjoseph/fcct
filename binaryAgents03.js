function binaryAgent(str) {

  var binaryString = str.split(' ');

  binaryString.forEach(function(word,i){
    var tempCharCode = parseInt(word,2).toString(10);
    binaryString[i] = String.fromCharCode(tempCharCode);
  });

  return binaryString.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

// Time = 14