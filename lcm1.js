function smallestCommons(arr) {
    arr.sort((a,b) => b - a);
    var min = arr[1];
    var max = arr[0];
  
    var LCM = max;
  
    for (var i = max - 1; i >= min; i--) {
      if (LCM % i) {
        LCM += max;
        i = max;
      }
    }
    return LCM;
  }
  
  
  smallestCommons([5,1]);

  // Time ~= 35