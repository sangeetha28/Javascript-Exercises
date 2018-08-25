// Code that adds a feature that the engine may lack

if (!Object.create) {
  Object.create = function(o) {
    if (arguments.length < 1) {
      throw Error("Needs atleast one parameter!");
    }
    function F() {}
    F.prototype = o; // sets the objects as its prototype
    return new F(); // returns a new empty object that assigns to the empty object with
    // the prototype property sets to the object that gets passed in.
  };
}
