/*Execution Context => Variable env + 'this' + Outer Environment */

/* To be able to control what 'this' keyword points to in the execution context, is where Call(), bind() , Apply() comes into
picture */

/** Function is a special type of Object which has an optional 'Name' property if not named, then the function will be anonynomous
 * and 'Code' Property which will contain the function code which is invocable
 */

/** All Functions have access to Call(), Apply(), Bind(), as functions are special kind of object, it has access to other methods
 and properties*/

/*** IMPORTANT -  All function in JS will have access to Call(), Bind(), Apply()  */

/** Bind Creates the Copy of the Function */

/** Call executes the function */

var Person = {
  firstName: "Sangeetha",
  lastName: "R",
  getFullName: function() {
    console.log(this.firstName + "" + this.lastName);
  }
};

// Arroe function cann't resolve 'this'; so changing it into function expression
var logName = function() {
  console.log(this.firstName);
};
// bind creates the copy of the function, which is called on. this variable in the logName points to
// Person object by reference
var copy = logName.bind(Person);

copy(); // if using bind, you need to invoke the function

// call will invoke the function

logName.call(Person); // Sangeetha
var Person = {
  firstName: "Sangeetha",
  lastName: "R",
  getFullName: function(text) {
    console.log(this.firstName + "" + this.lastName + " " + text);
  }
};

var Person2 = {
  firstName: "Max",
  lastName: "William"
};

/*** Function Borrowing**** */

/** We can call other Objects function(i.e Person getFullName) and either do call or apply on the object you want to
 apply or call to, make sure the function wi
 ll be workable with the all the properties from the new Object*/
Person.getFullName.call(Person2,"Greeting from Call Method!");

Person.getFullName.apply(Person2, ["Greeting to You!"]);

/** In Call and Apply if you pass the parameter, It just passes the parameter  */
/** In Bind - Function Currying Happens */

function multiply(a,b) {
    return a*b
}

var multipleCopy = multiply.bind(this,2,2);
multipleCopy(); // 4 

/** Function Currying(Binding the function with some preset parameters) - Creating a Copy of a Function with some Preset Parameters*/
