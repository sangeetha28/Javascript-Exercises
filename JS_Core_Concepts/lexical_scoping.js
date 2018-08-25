var foo = "Will it get printed????";
var a = function() {
  var foo = "Miracle Happens!!";
  var b = function() {
    console.log(foo);
  };
  return b;
};
var catchReturn = a();
catchReturn(); // what do you think it will print?
//Miracle Happens!!
