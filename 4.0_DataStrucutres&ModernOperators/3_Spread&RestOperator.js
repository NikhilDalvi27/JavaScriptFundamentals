//todo If the 3 DOTS are at the right side of =
// then imagine it as FETCHING all the values of the Specified array


//todo If the 3 DOTS are at the left side of =
// then imagine it as COLLECTING all the values of the Specified array
// into a NEW ARRAY
// in this case it should always be the last parameter


//todo Spread operator takes all the values out of the specified array

//todo Note that this is the Manual Process
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

//todo Note that this is using the spread Operator
// to do the Exact above task
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);
console.log(1, 2, 7, 8, 9);


//todo this is a complete new Array
const newArr1 = [...arr, 15];
console.log(newArr1);


// todo IMP Join 2 Arrays
const newArr2 = [...newArr, ...newArr1];
console.log(newArr2);



//todo REST basically collects the elements
// that are unused in Destructuring Assignment

//todo NOTE its the REST pattern
// REST, because on LEFT side of =

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);