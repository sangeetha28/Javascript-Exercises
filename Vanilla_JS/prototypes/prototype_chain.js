
/*uses studObj's __proto__ link which points to the prototype object of Student function. ' +
'If it still cannot find it there then it goes up in the heirarchy and check prototype object of ' +
'Object function because all the objects are derived from Object in JavaScript, and look for toString() method. ' +
'Thus, it finds toString() method in the prototype object of Object function and so we can call studObj.toString()*/
//prototype is useful in keeping only one copy of functions for all the objects

function Student() {
    this.name = 'John';
    this.gender = 'M';
}

Student.prototype.sayHi = function(){
    alert("Hi");
};

var studObj = new Student();
studObj.toString();