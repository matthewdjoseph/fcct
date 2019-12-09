function truthCheck(collection, pre) {
  // Is everyone being true?
  var truthyValue = true;
  collection.forEach(function(obj){
    var collectionKeys = Object.keys(obj);
    if(!obj[pre]){
      truthyValue = false;
    }
  });
  
  return truthyValue;
}

truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat");

// Time = 8