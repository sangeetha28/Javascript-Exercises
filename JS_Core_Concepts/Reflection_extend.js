var person = {
  firstName: "Default",
  lastName: "Default",
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

function getObjectKeys(obj) {
  var keys = [];
  for (var prop in obj) {
    keys.push(prop);
  }
  return keys;
}

var john = {
  firstName: "john",
  lastName: "samuel"
};

var jane = {
  petfirstName: "jane",
  petlastName: "rosie",
  address: "richmond"
};

var max = {
  doorNo: "28"
};

//Since there is no block scope in JavaScript - only function scope - by wrapping the function creation in a new function, you ensure that the value of "i" remains as you intended.
function extnd() {
  var mainObj;
  return function(arrayOfObjects) {
    if (arguments.length < 2 || arguments == null) {
      return arrayOfObjects;
    }
    for (var i = 1; i <= arguments.length; i++) {
      mainObj = arguments[0];
      var obj = arguments[i];
      console.log("Now the Obj is", obj);
      var getKeys = getObjectKeys(obj);
      for (var j = 0; j < getKeys.length; j++) {
        var key = getKeys[j];
        mainObj[key] = obj[key];
      }
    }
    return mainObj;
  };
}

//usage
var call = extnd();
call(john, jane, max);

// Extends method does extend the prototypes too 




