(function deepClone() {
    var person = {
        firstName: 'Tim',
        lastName: 'Crook',
        address: {
            street: {
                no: 29,
                name:'kew Road'
            },
            postcode: 'TW9 2NQ',
        },
        greet: function() {
            console.log('Hello '+ this.firstName+' Glad to Meet you!')
        },
        get lastname() {
            return this.lastName;
        }
    }

    function isObject(data) {
        return typeof data === 'object';
    }

    function clone(data) {
        var copy = {};
        for(var key in data)
        {
            if(!isObject(data[key])) {
                copy[key] = data[key];
            }
            else
            {
                copy[key] = clone(data[key])
            }
        }
        return copy;
    }

    console.log('Original object, person ', person);

    var newObject = clone(person);
    console.log('New object, cloned from person ', newObject);

    console.log('Updating name in clone');
    newObject.firstName = 'Test';

    console.log('Original object, person ', person);
    console.log('New object, cloned from person ', newObject);

    console.log('Updating nested property in clone');
    newObject.address.street.no = '30';

    console.log('Original object, person ', person);
    console.log('New object, cloned from person ', newObject);

    console.log('Updating function property in clone');
    newObject.greet = function() { console.log('hey'); };

    person.greet();
    newObject.greet();

})();
