//  Stops any new properties from being added to the Object but still allows for existing properties to be changed


const sealedObject = {
    name: 'Robert'
}

Object.seal(sealedObject);

sealedObject.name = 'Joseph'; // Can change the existing property
sealedObject.wearsWatch = true; // Cannot add new property as the object is sealed