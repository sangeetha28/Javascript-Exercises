/*// Start out with an object that has
// - A string property
// - A function property
// - A nested object property
// - A get function property*/

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



/*JQUERY
We can either use a tool like jQuery extend
- Please create an example with jQuery extend*/


var newPerson = $.extend({},person,{firstName: 'sangeetha', gender: 'female'}) // will add a newProperty but not override the value of exitsing fisrName property

/*Questions
**********

1.why firstName was not overriden?
2. How to copy objects Prototypes?
3. What is Jquery fn.extend?
4. How to add new property or override existing property to the nested object?

*/

/*
We can use ES6+ features, object spread (bare in mind the nested properties, they also need to be spread)
- Please create an example with nested spread operator*/

var newPerson = { ...person,firstName:'Sophia', address: {
    ...person.address,
    city: 'london'
}
}
console.log(newPerson);

/*{
firstName: 'Jonah',
    lastName: 'Samuel',
    address: {
    street: 'kew Road',
        postcode: 'TW9 2NQ',
        city: 'london'
},
greet: function() {
    console.log('Hello '+ this.firstName+' Glad to Meet you!')
},
get lastname() {
    return this.lastName;
}
}*/

console.log(person);
/*{
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
}*/


/*We can create a recursive function that takes an object, checks each property, copies or calls itself to dig deeper
Please create an example recursive copy function*/

