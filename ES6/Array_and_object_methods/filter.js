//Creates a new array on whether the items of an array pass a certain condition
// IMMUTABLE

// Create an array of students age that meet the legal drinking age

//The main difference between forEach and filter is that forEach just loop over the array and executes the callback
// but filter executes the callback and check its return value.

const studentsAges = [ 28,11,14,29,31,10,12,16,19,20]

studentsAges.filter( age => age > 18) // [28, 29, 31, 19, 20]


/*****************************/

// Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

const words = ['You','are','what','you','think','you','are','Always','aim','high','Be','Awesome']

words.filter(word => word.length > 4) // [think, always,awesome]

/*****************************/


const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Array filters items based on search criteria (query)
 */
const filterItems = (query) => {
    return fruits.filter((el) =>
        el.toLowerCase().indexOf(query.toLowerCase()) > -1
);
}

console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']

/*****************************/

const arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
];

let invalidEntries = 0;

const isNumber = (obj) => obj!== undefined && typeof(obj) === 'number' && !isNaN(obj);

function filterByID(item) {
    if(isNumber(item.id) && item.id !== 0) {
        return true;
    }
    invalidEntries++;
    //A function that lacks an explicit return statement will return undefined,
}

const arrByID = arr.filter(filterByID);

console.log('filter by ID',arrByID)

console.log('Number of Invalid Entries = ', invalidEntries);