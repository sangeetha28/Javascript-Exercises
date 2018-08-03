/* Object cloning

- Object cloning is difficult in JavaScript
    - Because nested objects only copy references
    - Because Stringifying and Parsing won't copy functions
    - Because object references point to the same object

- Start out with an object that has
    - A string property
    - A function property
    - A nested object property
    - A get function property

- In order to make a deep copy of an object
    - We can either use a tool like jQuery extend
        - Please create an example with jQuery extend
    - We can use ES6+ features, object spread (bare in mind the nested properties, they also need to be spread)
        - Please create an example with nested spread operator
    - We can create a recursive function that takes an object, checks each property, copies or calls itself to dig deeper
        - Please create an example recursive copy function
    - There are other tools on the market that does this, please check some out
        - Please create an example using lodash clone or another tool of your choice
    - The modern way of handling objects like this is Immutable
        - Please create an example where you use Immutable js to clone an object and manipulate the properties */


  var object = {
      
  }      