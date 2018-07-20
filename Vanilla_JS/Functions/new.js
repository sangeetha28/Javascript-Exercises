function MyFunc() {
    var myVar = 1;
    this.x = 100;
}

myFunc.prototype.y = 200;

var obj1 = new myFunc();
obj1.x; //100
obj1.y; //200


/*
Object Creation Process using new keyword
1. New keyword creates an empty object
2. Sets the invisible protype property of this empty object to the myFunc prototype property.
3. It binds all the properties and function declared with this keyword , obj1 will have x property. But myVar will not be inluded in new objecct
4. It will return this newly created object. myFunc doesn't include return statement but compiler will implicitly insert 'return this' at the end
*/