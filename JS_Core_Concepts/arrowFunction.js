//Arrow Functions lexically bind their context so this actually refers to the originating context.
//https://hackernoon.com/javascript-es6-arrow-functions-and-lexical-this-f2a3e2a5e8c4
var materials = [
    'Reason',
    'Code',
    'ReasonCode',
    'Bewell'
]

//ES5
materials.map(function(material){
    return material.length;
})

//ES6
materials.map((material)=>{
    return material.length;
})


//ES6 even better 

materials.map(material => material.length)
