// Global Scope
// If a function which includes 'this' keyword is called from the Global scope then 'this' will point to the window object.


var myVar = 100;

function whoIsThis(){
    var myVar = 200;

    alert("myVar = " + myVar); // will return 200 as myVar from the local scope

    alert("myVar = " + this.myVar) ; // will return 100
}

whoIsThis(); // // Calling the function from the  Global Scope, 'this' will point to window object. so this.myVar is 100


//There are four rules which applies to the 'this' keyword , Following is the order of precedence

/*1. Bind()
2. Call() and Apply()
3. Object Method
4. Global Scope

First check whether a function is being called as a Callback function, if not check whether a function is being called using Call or apply. If not
Check whether a function is being called as an object function. Otherwise, check whether a function is being called in the Global Scope. Using the above
rule JS engine will determine which object the 'this' keyword refers to. */