// Bind - set the context of 'this' to a specific object when a function is invoked

var myName = 'Rosa';

function whatIsMyName(callbackFunction) {
    var myName = 'Tilly';
    callbackFunction();
}


var obj = {
    myName: 'Jasmine',
    greet: function() {
        alert('Hey, Great to have you onBoard ', this.myName); // alert('Hey, Great to have you onBoard ',myName)
    }
}

// This function will be executed as a global function by JS engine
whatIsMyName(obj.greet); // Hey, Great to have you onBoard Rosa, as 'this' points to Global window Object


whatIsMyName(obj.greet.bind(obj)); // Hey, Great to have you onBoard Jasmine

var obj1 = {
    myName: 'Jasmine',
    greet: function() {
        alert('Hey, Great to have you onBoard ', myName); // without this keyword,binding won't happen
    }
}

whatIsMyName(obj.greet); // Hey, Great to have you onBoard Rosa
whatIsMyName(obj.greet.bind(obj)); // Hey, Great to have you onBoard Jasmine