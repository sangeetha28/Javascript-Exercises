//JS is a dynamic language we can add new properties to the object at any time

// If we want to add new properties at later stage to a function which will be shared across all the instances - > Prototype

// Protype is an object which is associated with every functions and objects by default in JS. Where function prototype property is accessible and modifiable
// object prototype property is not visible


function Student() {
    this.name = "Mary";
    this.gender = 'M';
}

Student.prototype.age = 15;

var stud1 = new Student();
alert(stud1.age) //15


var stud2 = new Student();
alert(stud2.age) //15

// Each object created using either object literal or constructor function will have __proto__ property  that points to the protype object of the function that created this object

function Student() {
    this.name = 'John';
    this.gender = 'M';
}

var studObj = new Student();

console.log(Student.prototype); // object
console.log(studObj.prototype); // undefined
console.log(studObj.__proto__); // object

console.log(typeof Student.prototype); // object
console.log(typeof studObj.__proto__); // object

console.log(Student.prototype === studObj.__proto__ ); // true

// Object does not expose protype property instead we can access it using __proto__

// The prototype property is a special type of enumerable object which cann't be iterate for ..in foreach loop

