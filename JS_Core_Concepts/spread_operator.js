//Replace apply
//It is common to use Function.prototype.apply in cases where you want to use the elements of an array as arguments to a function.

function myFunction(x, y, z) { console.log(x+y+z) }
var args = [0, 1, 2];
//myFunction.apply(null, args);

myFunction(...args)

// Example -2 

var args = [0,1]
var num = [0,1,2,3,4,5]
function myFunction(v, w, x, y, z) {
  num.forEach(n => console.log(arguments[n]))
}

myFunction(-1, ...args, 2, ...[3]);

// output : -1 0 1 2 3

