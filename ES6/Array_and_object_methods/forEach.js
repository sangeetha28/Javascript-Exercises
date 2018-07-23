// Applies a function on each items in an array
// Mutable


const emotions = ['happy', 'sad', 'angry'];
emotions.forEach( emotion => console.log(emotion) );

/****************************/




var total_cost = 0;

function add_to_total_cost(amount) {
    total_cost += amount.cost;
}

var shopping_cart_1 = [
    {
        item: 'shirt',
        cost: 22
    },
    {
        item: 'shorts',
        cost: 26
    }
];

var shopping_cart_2 = [
    {
        item: 'cereal',
        cost: 4
    },
    {
        item: 'milk',
        cost: 3
    },
    {
        item: 'eggs',
        cost: 2
    }
]

shopping_cart_1.forEach(add_to_total_cost);
shopping_cart_2.forEach(add_to_total_cost);

console.log(total_cost);