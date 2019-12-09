function steamrollArray(arr) {
  // I'm a steamroller, baby
  return arr.flat(Infinity);
}

steamrollArray([1, [2], [3, [[4]]]]);

// Time = .15