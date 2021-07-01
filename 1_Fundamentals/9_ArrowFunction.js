//todo Arrow Function
// DO NOT get the THIS keyword

//todo Arrow function is available from ES6 only

//todo Function Expression
const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
}
const age2 = calcAge2(1991);



//todo Arrow Function
// NO return keyword needed for one line function
// NO parantheses needed if only one parameter

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);


//todo return needed if multiple lines of code
// parantheses needed if multiple parameters

//todo if return is mentioned then, parantheses needs to be present
const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));