//todo Note loop over the Object using the
// FOR OF LOOP only
// use Object.keys() on that Object
// that will return an Array of keys inside that Object

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

for(const day of Object.keys(openingHours))
{
    console.log(day);
}

console.log();
console.log(Object.keys(openingHours));
console.log();
console.log(Object.values(openingHours));


//todo  Entire object
const entries = Object.entries(openingHours);
// console.log(entries);
// [key, value]
for (const [day, { open, close }] of entries) {
    console.log(`On ${day} we open at ${open} and close at ${close}`);
}
