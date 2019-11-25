function destroyer(arr) {
  var argArray = Array.prototype.slice.call(arguments);
  var arrayToCheck = argArray.shift();

  arrayToCheck = arrayToCheck.filter(x => !argArray.includes(x));

  return arrayToCheck;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Time = 10