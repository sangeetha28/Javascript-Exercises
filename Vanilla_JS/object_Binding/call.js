var name = 'Jonah';

function WhoIsThis(){
    alert(this.name)
}

var girl1 = {
    name: 'Liya' ,
};

var girl2 = {
    name: 'Rachel' ,
};

WhoIsThis(); // Output -> Jonah 'this will point to window object

WhoIsThis.call(girl1); // Output -> Liya


// Call -> we can call a function constructor with the current context

var novels = function(name,pages,author,coAuthor) {
    this.name = name,
        this.pages = pages,
        this.author = author,
        this.coAuthor = coAuthor
}


var technicalBook = function(name,pages,author,coAuthor,publishYear) {
    novels.call(this,name,pages,author,coAuthor)
   //novels.call(this); // we cannot access any other properties defined in the calling function
    this.publishYear = publishYear;
}




var techBook1 = new technicalBook('Eloquent JS',400,'Marijn Haverbeke','',2015);