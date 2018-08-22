function greet(whatToSay) {
  return function(name) {
    console.log(whatToSay + " " + name);
  };
}

var sayHi = greet("Hello"); // Execution context - greet + variable environment => whatToSay = 'Hello'
// Even after greet() function is finished executing, and the execution context is popped off from the stack, outer function
// variable environment in the memory space will still be available to the inner function
sayHi("Sangeetha"); //Execution context - sayHi(anonynous)+ variable environment => name= 'sangeetha'

function buildFunctions() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function() {
      console.log(i);
    });
  }
  return arr;
}

var fs = buildFunctions(); // outer exnv varaible i = 3 when the buildfunction is returned.
fs[0](); // 3
fs[1](); // 3
fs[2](); //3
// When the above functions are invoked, the value of outer(parent) enviroment refernce variable 'i' is 3

/********** */

function buildFunctions2() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(
      (function(a) {
        return function() {
          console.log(a);
        };
      })(i)
    );
  }
  return arr;
}

var fs2 = buildFunctions2();
fs2[0]();
fs2[1]();
fs2[2]();

/******** */
function buildFunctions3() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    let j = i; // let provides the block level scoping // J will be stored in the memory and it will have three slots of memory space, each
    // with the different 'i' value; It is different to 'Var' keyword
    arr.push(function() {
      console.log(j);
    });
  }
  return arr;
}

var fs3 = buildFunctions3();
fs3[0]();
fs3[1]();
fs3[2]();

/*********/

function makeGreetings(language) {
  return function(firstname, lastName) {
    if (language === "en") {
      console.log("Hello", firstname + lastName);
    }

    if (language === "es") {
      console.log("Hola", firstname + lastName);
    }
  };
}

var greetEnglish = makeGreetings("en"); // It will create one execution Context
var greetSpanish = makeGreetings("es"); // It will create another execution Context
greetEnglish("John", "Doe"); // greetEnglish will point to the out env reference variable pointing to 'en'
greetSpanish("John", "Doe"); // greetSpansih will point to the out env reference variable pointing to 'es'

function callBackEx() {
  var greeting = "hello";

  setTimeout(function() {
    // callback Function
    console.log(greeting); // greeting variable from outer function variable exnvironment even after outer function has popped
    //off the execution stack, that is closure..
  }, 3000);
}

callBackEx();
