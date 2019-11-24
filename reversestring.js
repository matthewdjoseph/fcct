function reverseString(str) {

  var returnString = str.split('');

  returnString = returnString.reverse();

  return returnString.join('');
}

reverseString("hello");

// Time = 1