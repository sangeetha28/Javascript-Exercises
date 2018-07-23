//Functions can use the rest parameter syntax to accept any number of arguments as an array.

// Display the array of passed arguements

// Functions can use the rest parameter syntax to accept any number of arguments as an array.


function displayArguementsArray(...theArguements) {
    console.log(theArguements);
}


displayArgumentsArray('hi', 'there', 'bud');

// Will print ['hi', 'there', 'bud']