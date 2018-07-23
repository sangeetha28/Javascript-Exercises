// obj assignment cannot be changed... eg. I cannot do obj = '123';  // I will get an error saying Assignment to const variable

const obj  = {
   a: 1,
   b: 2,
};
let copy = obj;
copy.a = 5;
console.log(copy.a);
// 5



// The Object variable is a container of new object inoitialized. The copy variable is pointing to the same object and is a reference to that Object.
//

function copy(orgObj) {
    let objCopy = {};

    for(let key in orgObj) // iterate using obj keys
    {
        objCopy[key] = orgObj[key];
        console.log(`objCopy now is ${objCopy[key]}`)
    }
    return objCopy;
}

mainObj = {
    a: 1,
    b: 'You can do it',
    c: 'Be happy no matter what',
}

var newObj = copy(mainObj);
console.log(newObj);
console.log(mainObj);


//Issues

/*
1. objCopy object has a new object.prototype method different from the mainObj prototype method

2. Property descriptors are not copied . A "writable" descriptor with the value set to false will be true in the newObj

3. Copies only enumerable properties of mainObj

4. If one of the properties in the orginal object is an object itself, then it will be shared between the copy and the original making their
respective properties point to the same object.
 */
