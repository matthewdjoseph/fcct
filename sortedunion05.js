function uniteUnique(arr) {
  var args = [...arguments];
  args = args.flat(Infinity);
  
  return [...new Set(args)];
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// Time = 3.5