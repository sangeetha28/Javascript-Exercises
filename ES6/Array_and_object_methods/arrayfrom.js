// Reference: Codeburst Useful array and Javascript methods

//  static method that creates an array based on another array or string.

// The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.

const newArray = Array.from('hello');

//newArray will be equal to ['h', 'e', 'l', 'l', 'o']

Array.from([1, 2, 3], x => x + x);
// [2, 4, 6]

//what is the difference between arrayFrom and map? cxcx