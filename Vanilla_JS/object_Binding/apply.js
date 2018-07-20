/* Same as Call,

The difference is:

    The call() method takes arguments separately.

    The apply() method takes arguments as an array.*/


var novel = function(name,pages,author,coAuthor) {
    this.name = name,
        this.pages = pages,
        this.author = author,
        this.coAuthor = coAuthor
}


var technicalBook = function(name,pages,author,coAuthor,publishYear) {
    novel.apply(this,[name,pages,author,coAuthor])
    //novels.call(this); // we cannot access any other properties defined in the calling function
    this.publishYear = publishYear;
}


var techBook1 = new technicalBook('Eloquent JS',400,'Marijn Haverbeke','',2015);