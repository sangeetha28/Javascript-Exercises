// Spreading an object allows for the addition of new properties and values to an object without mutating the original object. It can be  used
// to combine multiple objects together
// Note to remember - Spreading object does not do nested Copying, will only hold reference for nested objects
// IMMUTABLE

// Object spread copies from source own properties, ignoring the inherited ones from the prototype.

// Object spread does a shallow copy of the object. Only the object itself is cloned, while nested instances are not cloned.

const object = {
    name: 'sangeetha',
    address: {
        doorNo: 49,
        street: 'Finucane Court',
        city: 'London',
    }
}

const newObject = {...object}

const newObj = {
    ...object,
    lastname: 'R',
    address:     // We can spread properties at any level
     {
         ...object.address,
         street: 'Richmond Manor circus',
         postcode: 'TW9 2NQ'
     }
}

console.log(newObj);  // {doorNo: 49, street: "Richmond Manor circus", city: "London", postcode: "TW9 2NQ"}


/******************************************/

const laptop = {
    name: 'MacBook Pro',
    screen: {
        size: 17,
        isRetina: true
    }
};
const laptopClone = {
    ...laptop
};

console.log(laptop === laptopClone);               // => false The main Obj i.e laptopClone has copies correctly,they don't share reference.. So the value is false
console.log(laptop.screen === laptopClone.screen); // => true  laptop.screen  === laptopClone.screen references the same nested object that wasn't copied




/******************************************/

