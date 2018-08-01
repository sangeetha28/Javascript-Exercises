const clone = require('lodash.clone')
const clonedeep = require('lodash.clonedeep')

// Command to bundle using Browserfy - browserify lodash.js -o bundle.js
var person = {
    firstName: 'Jonah',
    lastName: 'Samuel',
    address: {
        street: 'kew Road',
        postcode: 'TW9 2NQ',
    },
    greet: function() {
        console.log('Hello '+ this.firstName+' Glad to Meet you!')
    },
    get lastname() {
        return this.lastName;
    }
}

// SHALLOW CLONING
var cloned = clone(person);
cloned.firstName = 'sangeetha';  // Mutating the Primitive

cloned.address.street = 'Richmond Manor circus'; // Mutating the nested Object

console.log('SHALLOW CLONED object ****************')
console.log(cloned);

console.log('ORGINAL object After Mutation ****************')
console.log(person); // will mutate person's address

/*
SHALLOW CLONED object ****************
Objectaddress: {street: "Richmond Manor circus", postcode: "TW9 2NQ"}firstName: "sangeetha"greet: ƒ ()lastName: "Samuel"lastname: "Samuel"__proto__: Object
ORGINAL object After Mutation ****************
Objectaddress: {street: "Richmond Manor circus", postcode: "TW9 2NQ"}firstName: "Jonah"greet: ƒ ()lastName: "Samuel"lastname: (...)get lastname: ƒ lastname()arguments: (...)caller: (...)length: 0name: "get lastname"__proto__: ƒ ()[[FunctionLocation]]: bundle.js:16[[Scopes]]: Scopes[1]__proto__: Object

*/

// DEEP CLONING
var deepClonedObject = clonedeep(person);
deepClonedObject.firstName = 'sangeetha';  // Mutating the Primitive

deepClonedObject.address.street = 'Richmond Manor circus'; // Mutating the nested Object

console.log('DEEP CLONED object ****************')
console.log(deepClonedObject);

console.log('ORGINAL object After Mutation ****************')
console.log(person); // will NOT mutate person's address

/*
DEEP CLONED object ****************
Objectaddress: {street: "Richmond Manor circus", postcode: "TW9 2NQ"}firstName: "sangeetha"greet: ƒ ()lastName: "Samuel"lastname: "Samuel"__proto__: Object
ORGINAL object After Mutation ****************
Objectaddress: {street: "kew Road", postcode: "TW9 2NQ"}firstName: "Jonah"greet: ƒ ()lastName: "Samuel"lastname: (...)get lastname: ƒ lastname()__proto__: Object
*/