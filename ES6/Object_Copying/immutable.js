/* https://medium.com/@dtinth/immutable-js-persistent-data-structures-and-structural-sharing-6d163fbd73d2
In JavaScript, objects are mutable by default.*/
/*When you clone an object, JavaScript has to copy every property over so that these two objects become totally separated.*/
/*This lets you mutate any object afterwards without affecting the other one. Even though you plan to treat these objects as immutable, JavaScript doesn’t care.*/

/*
Mutability Pain points
1. Make Code unpredicatble
2. Harder to manage state
3. Breaks time-travel debugging
*/

/*In a Immuatable world, once it's created state never changes,
* we have no way of changing internal state of the data
* and we have access to all the previous version of the state
* the reference always gets reassigned to the newly created data*/

/* Persistent data structures enforces a constraint that all operations will return a newer version of that data structure and keep the original structure intact,
instead of updating the original structure in-place.
 */

/* PARTIALLY PERSISTENT DATA STRUCTURE - Means Although we have access to the previous states, we can only modify the most latest
state
 */

/* STRUCTURAL SHARING - we only need to reconstruct needed nodes to update the tree(Minimal necessary change to create a new version). Other nodes could be reused as-is.

This is called structural sharing.

This is how Immutable.js implements its Immutable.Map. It creates a tree where each node can have up to 32 branches.*/

/*** IMMUTABLE JS provides many persistent immuatble datastructure inclduing list, map, sets etc*/

const Immutable = require('immutable');
const map = Immutable.map({a:1,b:2,c:3});
console.log(map); // {"a":1,"b":2;"c":3}


// Create a new Map from -- a javascript Array

const Immutable = require('immutable');

var personArray = [['firstItem','name'],[['secondItem','age']]]

console.log(Immutable.map(personArray));




import { Map, List, fromJS } from 'immutable';
// Normal Javascript
const person = {
    name: 'Will',
    pets: ['cat', 'dog']
};
// To create the equivalent in Immutable:
const immutablePerson = Map({
    name: 'Will',
    pets: List(['cat', 'dog'])
});
// Or ...
const immutablePerson = fromJS(person);

//fromJS is a useful function that converts nested data into Immutable. It creates Maps and Lists in the conversion.

//Converting back from Immutable to normal JavaScript
import { Map } from 'immutable';
const immutablePerson = Map({ name: 'Will' });
const person = immutablePerson.toJS();
console.log(person); // prints { name: 'Will' };

/*** Data structures should be thought of as EITHER plain JavaScript OR Immutable.**/

// Immutable does use getIn() function to get a nested value. If the key path doesn’t exist (that is, the object isn’t structured as you thought),
// it returns undefined rather than throwing an error.



const data = fromJS({ name: 'Will' });
const newNameData = data.set('name', 'Susie');
console.log(data.get('name')); // prints 'Will'
console.log(newNameData.get('name')); // prints 'Susie'


/*In this example we can see how the original “data” object is not changed. This means that you will not get any unpredictable behaviour when you update the name to “Susie.”

This simple feature is really powerful, particularly when you are building complex applications. It is the backbone of what Immutable is all about.

    Keynote: Operations on an Immutable object do not change the object, but instead create a new object.*/


/*Data structures should be thought of as EITHER plain JavaScript OR Immutable.
Operations on an Immutable object return the result of the operation.
Operations on an Immutable object do not change the object itself, but instead create a new object.*/