// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

//todo typeof  will display the DataType
// of the variable
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

console.log();

//todo note here the type is changing
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

console.log();

//todo note here
// year is not assigned value so it will be undefined
let year;
console.log(year);
console.log(typeof year);

console.log();

year = 1991;
console.log(typeof year);
console.log(typeof null);

//todo for String literals use `` $ and {}
const message =`This year is ${year}`;
console.log(message);

//todo literals also used for a new line
console.log(`This
is
on
New line`)