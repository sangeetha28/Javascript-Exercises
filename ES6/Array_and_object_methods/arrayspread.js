// spread operator (…) allows you to expand the elements in an array. It’s useful when concatenating a bunch of arrays together.

// It’s also a good way to avoid using the splice() method when looking to remove certain elements from an array because it can be combined with the slice() method to prevent direct mutation of an array.


const fruitsVeg = ['orange', 'blueberries','cherry', 'blackcurrants','mushroom', 'greenbeans','carrots','apple'];
const  fruits= [...fruitsVeg.slice(0,4),...fruitsVeg.slice(7)];

