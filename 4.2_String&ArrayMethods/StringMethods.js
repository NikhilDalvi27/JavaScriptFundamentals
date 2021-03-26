const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log();
console.log('B737'[0]);
console.log(airline.length);
console.log('B737'.length);

console.log()
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('portugal'));
console.log()

//todo slice is used for extracting the Substring
// First parameter is the begin parameter(Included) -- 0 based Indexing
// Second parameter is the end parameter (Not Included)
// Note that Underlying string is not changed
// Length of substring is End - Begin

console.log(airline.slice(4));
console.log(airline.slice(4, 7));


//todo get the First Word
console.log(airline.slice(0, airline.indexOf(' ')));

//todo get the last Word
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

//todo Note this is used for extracting from the end
// Following means the last 2 characters
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));



const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);


//todo replace function will only replace the first apperance
// use regex to replace all the apperances

const announcement =
    'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));


//todo Split Method
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');


//todo Join Method
// joins the strings using the delimiter provided
// output is String only
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);
console.log("here")

const capitalizeName = function (name) {
    const names = name.split(' ');
    const namesUpper = [];
    for (const n of names) {
        // namesUpper.push(n[0].toUpperCase() + n.slice(1));
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');
