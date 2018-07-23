// Prevent from modifying existing object properties or adding new properties and value to the object


const frozenObject = {
    name: 'Tilly'
}

Object.freeze(frozenObject);

frozenObject.name = 'Rosie';

// frozenObject will be equal to { name: 'Tilly' }

