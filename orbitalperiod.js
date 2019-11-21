function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var returnArray = new Array();

  for(var i=0; i< arr.length; i++){
    var pipi = 2*Math.PI;
    var r = earthRadius + arr[i].avgAlt;

    var orbitalP = pipi*Math.sqrt(Math.pow(r, 3)/GM);
    
    var returnObject = {
      name: arr[i].name,
      orbitalPeriod: Math.round(orbitalP)
    };

    returnArray.push(returnObject);
  }
  
  return returnArray;
}

console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));

// Time = 21