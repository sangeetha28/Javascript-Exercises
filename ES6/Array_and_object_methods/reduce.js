//A method which uses accumulator to reduce all items in an array to a Single value.

// reduce method of the array object is used to reduce the array to one single value.

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5)); // accumulator initial value is 5
// expected output: 15

/*******************************/

var sum = [{x: 1}, {x:2}, {x:3}].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.x;
},0)

console.log(sum) //  6

/*******************************/

/***Flatten an array of arrays ****/

 [[0,1],[1,2],[3,4],[5,6]].reduce(function (acc,currentValue){
return acc.concat(currentValue)
},[]);

/*******************************/

/***Counting instances of values in the array ****/

['Alice','Sophia','Bobby','Shehar','Ovia','Sophia','Shehar'].reduce((acc,currVal) => {
    if(currVal in acc)
    {
        acc[currVal]++;
            //[currVal]++;
    }
    else
     {
         acc[currVal] = 1
            //[currVal] = 1;
     }
     console.log('acc val is', acc);
     return acc;
}
,{}
);

/*******************************/

/*** Grouping Objects by Property ****/


var students = [ {name: 'a', gender: 'male', age: 20},
    {name: 'a', gender: 'male', age: 20},
    {name: 'b', gender: 'female', age: 19},
    {name: 'c', gender: 'male', age: 22},
    {name: 'd', gender: 'female', age: 20},
    {name: 'e', gender: 'male', age: 22},
    {name: 'f', gender: 'male', age: 19}
]

function groupBy(arr,property){
    return arr.reduce((acc, currVal) => {
       var key = currVal[property];
       if(!acc[key]){
           acc[key]= [];
       }
       acc[key].push(currVal);
       return acc;
    },{});
}

var results_gender = groupBy(students,'gender');
console.log(results_gender);
var results_age = groupBy(students,'age');
console.log(results_age);