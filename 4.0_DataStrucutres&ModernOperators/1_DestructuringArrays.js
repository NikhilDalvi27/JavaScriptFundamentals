

const arr =[2,3,5,7,8];

const[x,y,z]=arr;
console.log(x,y,z);

//todo Note how to skip the element in between
const[a,,c]=arr;
console.log(a,c);


//todo Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);