// to preserve the line break

let temp = ( ` cat
didn't
eat 
food
today
`
);

// Arrow Function 

function Person(name) {
    this.name = name;
}

Person.prototype.prefixName = function (arr) {
    return arr.map(character => this.name + character);
};
//Best Practice: Use Arrow Functions whenever you need to preserve the lexical value of this.

//Destructuring
//Destructuring allows us to extract values from arrays and objects 
//(even deeply nested) and store them in variables with a more convenient syntax.
//https://github.com/DrkSephy/es6-cheatsheet


const user = {
    id: 339,
    name: 'Fred',
    age: 42,
    education: {
      degree: 'Masters'
    }
  };
  const {education: {degree}} = user;
  console.log(degree);
  //VM2169:10 Masters
  undefined
  let users = { 
      user1: { name: 'Tom', address: '1 kew Road' },
      user2: { name: 'Jon', address: '22 kew Road' },
      user3: { name: 'Rich', address: '32 kew Road' } 
  };
  let { user2: {address} } = users;
  console.log(address);
  //VM2256:7 22 kew Road

console.log(occupation); // 'jedi'
console.log(father); // 'anakin'


//Rest Parameter 

// In ES5, we handled an indefinite number of arguments like so:

// function logArguments() {
//     for (var i=0; i < arguments.length; i++) {
//         console.log(arguments[i]);
//     }
// }
// Using the rest operator, we can pass in an indefinite amount of arguments:

// function logArguments(...args) {
//     for (let arg of args) {
//         console.log(arg);
//     }
// }










