function uniteUnique(arr) {
  return [...new Set([...arguments].flat(Infinity))];
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);