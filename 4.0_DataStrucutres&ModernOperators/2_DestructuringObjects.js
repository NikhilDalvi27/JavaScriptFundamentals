const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // ES6 enhanced object literals
    openingHours,

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    //todo Note here instead of receiving Object as the input parameter
    // It is destructured while receiving it as parameter itself
    // Useful when there are lots of parameter to be passed and their order will create a confusion
    // Specified below are the EXACT KEYS inside the object and their DEFAULT values if key is not found
    orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(
            `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
        );
    },

    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    },
};



restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
});


//todo In this case default values will be applied
restaurant.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 1,
});



//todo This is Destructuring by specifying exact property Name
 const { name, openingHours:hours1, categories } = restaurant;
console.log(name, hours1, categories);


//todo This is Destructuring by specifying new property Name

 const {
// todo  the KEY is ORIGINAL NAME in OBJECT restaurant and VALUE is NEW NAME
    name: restaurantName,
    openingHours: hours,
    categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
// Default values

//todo Note here starterMenu is the Original key in restaurant Object
// starters is the new key name and
// [] is the default value if the starterMenu key is not found
const {
    menu = [],
    starterMenu: starters = []
} = restaurant;


console.log(menu, starters);



// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

//todo Note that the statement is wrapped
// inside the parantheses
({ a, b } = obj);

console.log(a, b);



//todo  Nested objects destructuring and renaming
const {
    fri: { open: o, close: c },
} = openingHours;
console.log(o, c);