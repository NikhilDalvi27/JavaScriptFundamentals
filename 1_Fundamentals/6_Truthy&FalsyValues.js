//todo list of Falsy values
// 0(Note), undefined, null, NAN, ''(Note),  false   <------
// the above values will result in false
// if attempted to convert in boolean

//todo all the below coersions occur implicitly
// in an IF ELSE statement

console.log();

//todo Note that 0 results in false
console.log(Boolean(0));
//todo Note that '' results in false
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));

//todo IMP Note the below is converted to true
console.log(Boolean({}));

//todo the below is converted to false
console.log(Boolean(''));
