// Function Construction 

// A Normal function used to construct objects 

//The 'this' variable points to the new empty object, Function constructor is ued to 
// add properties and method and the object is returned automatically by the Function 
// Remember there should not be any return statements in the function

// All Function will  have a prototype Property

// But Only when the function is a constructor function, prototype property is accessed
// By default function prototype will be a empty object 
// We can add properties and methods to it 
// Any Object that is constructed via constructor function will have access to the 
// property and methods with 'this' keyword pointing to the Object that is created using Constructor function

// Properties and methods can be added to the constructor function protype even after 
// after objects have been created using constructor function. 
// if no new Keyword then it will just be a normal function call and will return unefined
// won't hit the prototype chain as there is no new keyword
// first letter should be capitalizeed for function constructor 


