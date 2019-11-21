var Person = function(firstAndLast) {

  var fullName = firstAndLast;

  this.getFullName = function() {
    return fullName;
  };

  this.getFirstName = function(){
    return fullName.split(' ')[0];
  }

  this.getLastName = function(){
    return fullName.split(' ')[1];;
  }

  this.setFullName = function(name){
    fullName = name;
  }

  this.setFirstName = function(name){
    fullName = name + ' ' + fullName.split(' ')[1];
  }

  this.setLastName = function(name){
    fullName = fullName.split(' ')[0] + ' ' + name;
  }

  return firstAndLast;
};

var bob = new Person('Bob Ross');
console.log(bob.getFirstName());

// Time = 25