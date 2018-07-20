//Immediately Invoked Function Expression (IIFE) is one of the most popular design patterns in JavaScript.
// "Immediately Invoked Function Expression"
// Paranetheses () does not contain statements, Parantheses contains expressions
// IIFE solves -> write all the functions and variables inside IIFE without worrying about polluting the global scope or conflict
// with other's JavaScript code which have functions or variables with same name.

(function () {
    console.log('Everyday is a fresh start.... ')
})();

//Everyday is a fresh start....

/*Advantages of IIFE
1.Do not create unnecessary global variables and functions
2.Functions and variables defined in IIFE do not conflict with other functions & variables even if they have same name.
3.Organize JavaScript code.
4.Make JavaScript code maintainable.*/


/**********************************/

var price = (function() {
    var price = 100;

    // Private function
    function changeBy(val) {
        price+=val;
    }

    return {

        // All the below functions are public functions as we are returning them

        increasePrice: function() {
            changeBy(50);
        },

        decreasePrice: function() {
            changeBy(-25);
        },

        price: function(){
            return price;
        }
    }
})();

price.price(); // 100
price.increasePrice(); // 150
price.increasePrice(); // 200
price.increasePrice(); // 250
price.decreasePrice(); // 220
price.decreasePrice(); // 200
price.decreasePrice(); // 175
price.price(); //175