// 'This' keyword in inner function inside the Object refers to the Global Object that is Windows.

// Usually 'This' inside the Object method will refer to the Object itself, but nested function inside the object will refer to the Global
// window Object

var obj =
{
firstName: 'Sangeetha',
lastName: 'R',
text: 'You are Special',
greet: function(){
   console.log('Hello',this.firstName+this.text);

   return function change() {
      this.text = 'You are Simply Fabulous!'; // Remember this text will be appened to the Window Object and will not override the current object text
   }
}
}


  var greety = obj.greet();
  greety(); // inpect window object as it will have new text property now
  console.log(obj.text);