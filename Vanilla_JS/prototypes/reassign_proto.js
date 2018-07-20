function Animal(name,sound){
    this.name = name,
        this.sound = sound
}

Animal.prototype.greetings = function() {
    return 'Hello'+this.name+'You sound'+this.sound;
}

function petAnimals(animalName,owner){
    this.animalName = animalName,
        this.owner = owner
}

petAnimals.prototype.greetings = function() {
    return 'Hello '+ this.animalName + ' You belong to ' + this.owner
}

var cat = new Animal('cat','meow');
var dog = new Animal('dog','woof');

console.log(cat.__proto__ === Animal.prototype); // true
console.log(cat.__proto__ === dog.__proto__); // true

cat.__proto__ = petAnimals.prototype;

var a = cat.greetings();
console.log(a); // Hello cat You belong to undefined