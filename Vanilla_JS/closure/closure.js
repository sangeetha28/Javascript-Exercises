/*
A function can return another function in JS, A function which is assigned to a variable is called function expression
Closure means the inner function always has access to the vars and parameters of its outer function even after outer function has returned in
Nested function
if inner function access the variables of outer function then only it is called closure.
*/


/**********************************/

function outerFunction() {

    var outerVariable = 'You are Awesome!';

    function innerFunction(){
     alert(outerVariable);
}

return innerFunction;
}


var getInnerFunc = outerFunction(); // Outerfunction will return inner function

/*When we call innerFunction, it can still access outerVariable which is declared in the Outerfunction. This is called Closure
Outer variables can keep the states between multiple calls, Inner function does not keep a seperate copy of outer variables but it reference
outer variable that means value of outer variable will be changed if we change it from inner function.*/

getInnerFunc();


/**********************************/


function Counter() {
    var counter = 0;

    function IncreaseCounter() {
        counter += 2;
        alert(counter);
        function decreaseCounter() {
            counter -= 1;
            alert(counter);
        };
        return decreaseCounter;
    };
    return IncreaseCounter;
}

var increaseCounter = Counter();
var decreaseCounter = increaseCounter();
increaseCounter();
increaseCounter();
increaseCounter();
decreaseCounter();
decreaseCounter();