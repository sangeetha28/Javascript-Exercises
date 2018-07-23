let obj = {
    a: 1,
    b: 2,
};

let objCopy = Object.assign({},obj);

objCopy.b = 89;

console.log(objCopy); // result - { a: 1, b: 89 } // Created a copy of the source object without any reference to it
console.log(obj); // result - { a: 1, b: 2 }

/******************************************/
/*** Object assign only does Shallow Copying - i.e nested object is shared between the original(source) and the copy(target)****/

let obj = {
    a: 1,
    b: {
        c: 2,
    },
}
let newObj = Object.assign({}, obj);
console.log(newObj); // { a: 1, b: { c: 2} }

obj.a = 10;
console.log(obj); // { a: 10, b: { c: 2} }
console.log(newObj); // { a: 1, b: { c: 2} }

newObj.a = 20;
console.log(obj); // { a: 10, b: { c: 2} }
console.log(newObj); // { a: 20, b: { c: 2} }

newObj.b.c = 30;
console.log(obj); // { a: 10, b: { c: 30} }
console.log(newObj); // { a: 20, b: { c: 30} }


// newObj.b and obj.b share the same reference to the object
// because individual copies were not made, instead a reference to the object was copied
// Any change made to any of the object's property applies to all references using the object.

/******************************************/

let someObj = {
    a: 2,
}

let obj = Object.create(someObj, {
    b: {
        value: 2,
    },
    c: {
        value: 3,
        enumerable: true,
    },
});

let objCopy = Object.assign({}, obj);
console.log(objCopy);

/* someObj is on obj's prototype chain so it wouldn't be copied.
property b is a non-enumerable property.
property c has an enumerable property descriptor allowing it to be enumerable. That's why it was copied.*/
