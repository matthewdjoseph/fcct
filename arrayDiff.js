function diffArray(arr1, arr2) {
  return arr1.filter(e => !arr2.includes(e))
              .concat(arr2.filter(x => !arr1.includes(x)));
}

diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);

// Time = 10