function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments);
  var arrayToSearch = args.shift();

  arrayToSearch.forEach(function(e,i){
    if(args.includes(e)){
      arrayToSearch[i] = null;
    }
  });

  return arrayToSearch.filter(e => e != null);
}

destroyer([1, 3, 2, 1, 2, 3], 3, 2);

// Time = 12