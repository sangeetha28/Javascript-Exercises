//Function statement, function is the first word and the function won't be executed until it is invoked, It will be in memory
function greet(name){
    console.log('Hello',name);
}

greet(); 

// We can use a function expression to set a variable to it. The function is not put in the memory initiallu. 
// Rather when the expression is getting executed, JS engine creates the function on the fly and then we can invoke the function 
// using variable 

var greetFunc = function(name){
    console.log('Hello',name);
}
greetFunc();

//IIFE
var greetFunc = function(name){
    console.log('Hello',name);
}('John');

// A function expression wrapped inside a parantheses so that syntax parser will know it is not a function statement 
// but a function expression
// Below function runs on its own execution context and will not collide into global space variable with the same name, unless purposely we want to
var name = 'window'; // global execution context

(function(global,name){ // execution context on the top of global execution context
    global.name = 'greet';
    console.log('Hello',name);
}(window,'John'));







