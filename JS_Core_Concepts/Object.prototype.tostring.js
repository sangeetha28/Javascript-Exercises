Object.prototype.toString;
//ƒ toString() { [native code] }
var a = {};
undefined;
Object.prototype.toString.call(a);
("[object Object]");
var a = [];
undefined;
Object.prototype.toString.call(a);
("[object Array]");
var a = "hello";
undefined;
Object.prototype.toString.call(a);
("[object String]");
