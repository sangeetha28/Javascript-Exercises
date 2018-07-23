//Creates a new array by manipulating the values in another array.
// IMMUTABLE

//Map like filter & foreach takes a callback and run it against every element
// on the array but whats makes it unique is it generate a new array based on your existing array.

const people = [{name: 'Adam', gender: 'Male'}, {name: 'Eve', gender: 'Female'} , {name: 'Johnny', gender: 'Male'}, {name: 'Jane', gender: 'Female'}]

const addressPeople = people.map( el => {
    if(el.gender === 'Male')
    {
       el.name = "Mr "+ el.name
    }
    else {
      el.name = "Miss " + el.name
   }
})

console.log(people)
console.log(addressPeople)


/*Vanilla JS *****************************/

var kvArray = [{ a: 1,test: () =>  console.log('test1')},{a: 2,test: () => console.log('test 2')}];

var reformattedArray = kvArray.map(obj =>{
    var rObj = {};
rObj[obj.a] = obj.test;
return rObj;
});

console.log(reformattedArray);

/*****************************/
//Array.prototype.call(objectToBeMapped, callbackFunction) - We can use map in strings and other types of objects

var map = Array.prototype.map;
var a = map.call('Be Yourself', function(x) {
    return x.charCodeAt(0);
});
console.log(a);

/*****************************/


function splitter(string) {
    return Array.prototype.map.call(string, (x) => x);
}

console.log(splitter('Hello World'));