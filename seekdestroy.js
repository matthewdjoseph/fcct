function destroyer(arr) {
    var newArray = arguments[0];
    var argumentArray = new Array();

    for(var i = 0; i< arguments.length; i++){
        if(i != 0){
            argumentArray.push(arguments[i]);
        }
    }

    for(var i=0; i< newArray.length; i++){
        
        for(var j=0; j< argumentArray.length; j++){
            if(newArray[i] == argumentArray[j]){
                newArray.splice(i,1);
                i--;
            }
        }
    }

    return newArray;
}

   console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));

// Time = 35