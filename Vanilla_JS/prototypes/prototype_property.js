/*All Javscript object inherits properties and method from a prototype
The Object.prototype is on the top of the Protype Chain
Function is a object itself
Invoking a function as a constructor
When we create a new object using 'new' keyword 'this' is implicitly set to the new Object
IN JS each object has a prototype called "Prototype" . An Object prototype allows us to add protype to all instances of that object
this refer to the object that calls the method*/


// Object Constructor
function Person(firstName,lastName,yearOfBirth,job){
    this.firstName = firstName,
    this.lastName = lastName,
    this.yearOfBirth = yearOfBirth,
    this.job = job
}

Person.prototype.calculateAge = function() {
        return (new Date()).getFullYear() - this.yearOfBirth;
}
Person.prototype.greetings = function(age) {
    console.log("Hello",this.firstName,this.lastName,"Your age is",age)
}


var john = new Person('John','Smith',1987,'Software engineer');
john.greetings(john.calculateAge());
var jane = new Person('Jane','oliver',1995,'Teacher');
jane.greetings(jane.calculateAge());
var harry = new Person('harry','william',1980,'Doctor');
harry.greetings(harry.calculateAge());