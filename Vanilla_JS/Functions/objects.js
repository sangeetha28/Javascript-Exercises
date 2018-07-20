//Objects in JS can be created using either Object literal or Object Constructor/Constructor function

// Object Literal
var person = {
    firstName: 'Mark',
    lastName: 'zuckerberg'
}

// Any Javascript function using which object is created is called Constructor function

function Student(){
    this.name = "John";
    this.gender = 'Male';
    this.sayHi = function () {
        alert('Hi');
    }
}


var student1 = new Student();
student1.sayHi();

////enumerate properties of student1
for(var prop in student1){
    console.log(prop);
}


Object.keys(student1) // retrieve all the properties names for the specified object as a string of array.

Object.getOwnPropertyDescriptor(person, 'firstName') //Object {value: "Mark", writable: true, enumerable: true, configurable: true}

/*Value -> actual value of the property
Writable -> Indicates that whether a property is writable or read-only. If true value can be changed, if false value cann't be changed will throw
an exception in strict mode
enumerable -> Indicates whether property can show up during enumeration using for-in-loop or Object.keys() method.
Configurable -> Indicates whether the property attributes can be changed using Object.defineProperty method*/


Object.defineProperties(student1, { name: { writable: false }})

student1.firstName = 'John'; // Result: Cannot assign to read only property 'name' of object '#'

function Person() {
    this.firstName = 'Mark',
        this.lastName = 'zuckerberg'
}

var person1 = new Person();
console.log(person1.firstName);

var obj1 = {value: 'John'}

console.log(typeof obj1)

Object.defineProperties(person1, { firstName: { value: 'John' }});
console.log(person1.firstName);