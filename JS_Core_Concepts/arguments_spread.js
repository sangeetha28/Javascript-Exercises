function greet(firstname,lastname,address){
      address = address || 'Richmond'; // address if 'undefined' during hoisting will be coarsed to false then the Right hand value
      // will be assigned to the address variable. 

      if(arguments.length === 0 ){
          console.log('Missing Parameters!');
          return;
      }
    
    console.log(firstName);
    console.log(lastName);
    console.log(address);
    console.log(arguments); // JS special Variable, which holds all the parameters in a arrayLike data structure/ 
}

greet(); // In other programming lang, compiler will throw error. But in JS, it is totally Valid. 
// Hoisting will happen when the function is executed, it will set up a memory space and take care of parameter values even though it was
// though the function has not passed any.
greet('John'); // parameters will be evaluated from the left to the Right, 'John' will be assigned to firstName 

/******/

function greet(...args){
    args.forEach((el,index) => console.log('Element',index + ' ' + el ))
}

greet('Joe','Smith','Manor Road');