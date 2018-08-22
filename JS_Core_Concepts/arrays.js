/* Javascript Arrays can hold the Collection of Anything */
/* Arrays can hold even function, we can call them */

var arr = [
  1,
  false,
  {
    name: "Rosa",
    address: "Richmond"
  },
  function(name) {
    console.log(
      name,
      " This is not a function Statement, But a Function expression!"
    );
  },
  "If you want, work for it! Simple as that..."
];

console.log(arr);
arr[3](arr[2].name);
