//todo The Only difference betweeen an Object and Map is
// Object can have only String as keys
// and  Maps can have ANYTHING as keys

const rest = new Map();

//todo First is the Key and the other is value
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));
rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open :D')
    .set(false, 'We are closed :(');

//todo get followed by key name
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

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

console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));