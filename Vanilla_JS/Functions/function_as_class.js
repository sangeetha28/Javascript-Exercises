/* ES5 doesn't have a class type
Function can be used like a Class in Javascript*/

 //Person doesn't have any Parameters
function Person() {
    this.firstName = '';
    this.lastName ='';
    this.getFullName = function() { return this.firstName+ "" + this.lastName}
}

/*
We can create Object of any Function using 'New' keyword, Person is a Class, person1 and person2 are objects
Each Objects will hold its properties seperately as 'this' keyword will bind them to a particular object when we create an object using new keyword
*/

var person1 = new Person();
person1.firstName = "Elon";
person1.lastName = "Musk";
alert(person1.getFullName());
//
var person2 = new Person();
person2.firstName = "Tim";
person2.lastName = "Cook";
alert(person2.getFullName());



/**********************************/

/*Construtor
Function can have one or more parameters, So function with one or more parameters can be used like a Constructor function, we can pass parameter values
when creating an object with the new keyword*/

function Person(firstName,lastName,age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age
    this.getFullName = function() { return this.firstName+ "" + this.lastName}
}

// If parameter value is not passed while creating an object using new then will be undefined.
var person1 = new Person('John','Smith',30);
alert(person1.getFullName());

var person2 = new Person('James','Fiddler',32);
alert(person2.getFullName());