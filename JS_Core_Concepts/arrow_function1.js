var alphabets = ['a','b','c','d','e','f'];

function Lady(name) {
    this.name = name;
}

Lady.prototype.prefixName = function (arr) {
    return arr.map(character => this.name + 'is a' + character);
};

var lady = new Lady('Sangeetha');
lady.prefixName(alphabets);