
//todo use === so that type coersion is NOT performed
// Never use ==


//todo type conversion

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);


console.log(Number('Jonas'));
console.log(typeof NaN);



//todo type coersion
// if an OPERATOR is dealing with TWO different data types
// then JavaScript will AUTOMATICALLY convert one data type to other

//todo this will result in concatenation
console.log('23'+'10'+3);

//todo this will result in subtraction
console.log('23'-'10'-3);

console.log('23' / '2');
console.log('23' > '18');
