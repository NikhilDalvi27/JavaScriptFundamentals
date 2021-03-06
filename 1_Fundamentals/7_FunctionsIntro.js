
//todo Note that here we DONT have a return type
// just use the function keyword followed by function name

function logger(name) {
    console.log(`My name is ${name}`);
}

logger('Jonas');



function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
//todo Store whatever is returned
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);


const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
const num = Number('23');