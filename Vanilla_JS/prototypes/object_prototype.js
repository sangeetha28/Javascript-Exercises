// Object protype property is invisible so use Object.getPrototypeOf(obj) to get the object prototype


function Student() {
    this.name = 'John';
    this.gender = 'M';
}

var studObj = new Student();

Student.prototype.sayHi= function(){
    alert("Hi");
};

var studObj1 = new Student();
var proto = Object.getPrototypeOf(studObj1)

console.log(proto); // { sayHi: f, constructor: f} and also It will have an invisible property called __proto__ It will have prototype property of the function which
//it links to ...

console.log(studObj1.__proto__) // { sayHi: f, constructor: f}

// //The prototype object includes following properties and methods.
// properties
// ***********
// //constructor	Returns a function that created instance.
// //__proto__ -> This is invisible property of an object. It returns prototype object of a function to which it links to.
//
// // Methods
// // hasOwnProperty()
// // isPrototypeOf()
// // propertyIsEnumerable()
// // toLocaleString()
// // toString()