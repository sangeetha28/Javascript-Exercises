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


    function isArray(data) {
        /* toString() is a prototype method of Object, so
          We can use toString() to detect any object class
          var toString = Object.prototype.toString;
          ex: toString.call(new Date);    // [object Date]
          return toString.call(data) === "[object Array]"
      }*/
        return toString.call(data) === "[object Array]"

    }

    function clone(data) {
        var copy;
        if(!isObject(data) || data === null){
            return data;
        }

        if(isArray(data)) {
            copy = [];
            for(var i=0; i< data.length;i++){
                if(isObject(data[i])){
                    console.log('first',data[i]);
                    copy[i] = clone(data[i]);
                }
                else
                {
                    console.log('Please pass an array of Objects as an Input!')
                }
            }
            return copy;
        }

        for(var key in data)
        {
            copy = {};
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

    // console.log('Original object, person ', person);
    //
    // var newObject = clone(person);
    // console.log('New object, cloned from person ', newObject);
    //
    // console.log('Updating name in clone');
    // newObject.firstName = 'Test';
    //
    // console.log('Original object, person ', person);
    // console.log('New object, cloned from person ', newObject);
    //
    // console.log('Updating nested property in clone');
    // newObject.address.street.no = '30';
    //
    // console.log('Original object, person ', person);
    // console.log('New object, cloned from person ', newObject);
    //
    // console.log('Updating function property in clone');
    // newObject.greet = function() { console.log('hey'); };
    //
    // person.greet();
    // newObject.greet();

    var original = {a: 1,c:{firstName:'Noths employee',b: function() {
                console.log('Hello '+ this.firstName+' Glad to Meet you!')
            },e:4,get lastname() {
                return this.lastName;
            }}}

    var arrayOfObjects = [ original,{b:'c'},{d:'7'}];
    var newArrayOfObjects = clone(arrayOfObjects);

    console.log('Updating nested property in clone');
    newArrayOfObjects[0].c.e = 20;

    console.log('New object, Mutating a nested property value', newArrayOfObjects[0].c.e);
    console.log('Main object after mutation ', arrayOfObjects[0].c.e);

    console.log('Updating function property in clone');
    newArrayOfObjects[0].c.b = function() { console.log('hey'); };
    newArrayOfObjects[0].c.b(); // hey


    console.log('Main Object function after Mutation');
    console.log(original.c.b()); // Hello Noths

})();
