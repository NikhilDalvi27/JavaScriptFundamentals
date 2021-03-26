
//todo this will avoid Duplicates
// Note that there are no indexes in set

//todo here array is given as an iterable
const ordersSet = new Set([
    'Pasta',
    'Pizza',
    'Pizza',
    'Risotto',
    'Pasta',
    'Pizza',
]);
console.log(ordersSet);

// todo here characters will be the Iterable
console.log(new Set('Jonas'));


console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

//todo looping over set
for (const order of ordersSet)
    console.log(order);
// Example

//todo IMP USECASE for REMOVING DUPLICATES
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const tempSet = new Set(staff);
//todo Destructuring over the set and then converting it to an Array
const staffUnique = [...tempSet];
//todo StaffUnique is the new array
console.log(staffUnique);

console.log("here");



console.log(
    new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
console.log(new Set('jonasschmedtmann').size);