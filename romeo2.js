function whatIsInAName(collection, source) {
  let sourceKeys = Object.keys(source);
  
  return collection.filter(obj => 
                          sourceKeys.map(x => 
                                        obj.hasOwnProperty(x) && obj[x] == source[x])
                                    .reduce((a,b) => a && b));

}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// Time = 11