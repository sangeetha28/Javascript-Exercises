/** INHERITANCE - One Object gets access to the Properties and Methods of another Object */

var person = {
  firstName: "Default",
  lastName: "Default",
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

var john = {
  firstName: "John",
  lastName: "Samuel"
};

var Jane = {
  firstName: "Jane"
};

//Protype Chain
john.__proto__ = person;
john.getFullName();

Jane.__proto__ = person;
Jane.getFullName(); // Jane Default( Default from the Protype Chain)