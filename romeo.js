function whatIsInAName(collection, source) {
    var arr = [];
    var key = Object.keys(source);
    var indices = [];

    for(var i=0; i< collection.length; i++){
        for(var j=0; j< key.length; j++){
            if(collection[i][key[j]] == source[key[j]]){
                indices.push(i);
            }
        }
    }

    return arr;
   }
   console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));