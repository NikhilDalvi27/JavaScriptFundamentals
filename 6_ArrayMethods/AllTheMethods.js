
//todo Push will add the element
// at the END of the array

const friends = ['Michael','Steven','Peter'];
friends.push('Jonas');
console.log(friends);

//todo Unshift will add Element
// at the Beginning of the Array

friends.unshift('Clark');
console.log(friends);


//todo Pop will remove the element
// from the end of the Array

friends.pop();
console.log(friends);

//todo shift will remove the element
// from front of array

friends.shift();
console.log(friends);


//todo indexOf and includes
// to check if an element is present in Array

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

