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
       var copy;
       if(isObject(data)){
           copy = {};
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
       }
       else
       {
           copy = data;
       }

        return copy;
   }
   var newObject = clone(person);
    newObject.address.street.no = '30';
   console.log('Newly Cloned Object is', newObject.address.street.no);
   console.log('Main Object is', person.address.street.no);

})();