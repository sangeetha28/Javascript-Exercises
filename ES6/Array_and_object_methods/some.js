//The some() method tests whether at least one element in the array passes the test implemented by the provided function.

// Returns boolean

//This method returns false for any condition put on an empty array.


var arr = [ 1,3,9,7,11];

function findEvenNumbers(arrayOfNumbers) {
    return arrayOfNumbers.some( el => el % 2 === 0)
}

findEvenNumbers(arr);  //false

/**********************/

/* Check if there is atleaset one element in the array*/

['user', 'user', 'user', 'admin'].some( element => element === 'admin'); // true


/**********************/

var fruits = ['apple','banana','watermelon','pineapple','grapes']

function checkAvailability(fruits, fruit) {
    return fruits.some(el => el === fruit)
}

checkAvailability(fruits,'watermelon'); // true
checkAvailability(fruits,'mango'); // false


/****************************/
