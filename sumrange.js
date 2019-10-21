function sumAll(arr) {
    arr = arr.sort((a,b) => a - b);
    var sumRange = 0;
    for(var i = arr[0]; i<= arr[1]; i++){
        sumRange += i;
    }

    return sumRange;
}
   
console.log(sumAll([1, 4]));

// Time = 3