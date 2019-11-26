function binaryAgent(str) {
  var sentenceArray = str.split(' ');
  var returnArray = new Array();

  sentenceArray.forEach(n => returnArray.push(String.fromCharCode(parseInt(n,2).toString(10))));

  return returnArray.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

// Time = 7