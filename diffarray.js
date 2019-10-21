function diffArray(arr1, arr2) {
    var newArr = [];

    arr1 = arr1.sort((a,b) => a-b);
    arr2 = arr2.sort((a,b) => a-b);

    for(var i=0; i< arr1.length; i++){
        if(!arr2.includes(arr1[i])){
            newArr.push(arr1[i]);
        }
    }

    for(var i=0; i< arr2.length; i++){
        if(!arr1.includes(arr2[i])){
            newArr.push(arr2[i]);
        }
    }

    return newArr;
   }
   
   console.log(diffArray([1, 2, 3, 5, 10, 20, 30], [1, 2, 3, 4, 5, 15, 25, 35]));

   // Time = 3