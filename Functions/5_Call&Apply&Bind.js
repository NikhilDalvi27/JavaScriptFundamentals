//todo These Methods are basically used
// to alter the THIS keyword
// meaning where the this keyword should point to
// BASICALLY they are used for method Borrowing



const lufthansa={
    airline : 'lufthansa',
    iataCode :'LH',
    bookings:[],
    book: function (flightNum,name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`);
        this.bookings.push({ flight : `${this.iataCode} ${flightNum}`,
                            name: name})
    }
}

lufthansa.book(239,'Jonas shmidth');
lufthansa.book(635,'John Doe');
console.log(lufthansa);

//todo Now Suppose we want the same function of the lufthansa Object in the eurowing object
// so simply copy pasting that method from the lufthansa object into eurowing is a bad practice
// so copy that method into an external function and then reuse that function

const eurowing={
    airline: 'Eurowing',
    iataCode: 'EW',
    bookings: [],
}

const book = lufthansa.book;

//todo comment this for removing error
// here the error is bcoz the THIS keyword is set to undefined
 // book(23, 'Sarah william');

console.log();
//todo SOLUTION
// the First argument is where the this keyword should point to
// and the rest argument are the usual arguments of the function

book.call(eurowing,23, 'Sarah william');
console.log(eurowing);

console.log();

book.call(lufthansa,2399, 'Mary Copper');
console.log(lufthansa);

//todo only difference between the call and apply is how the arguments are passed

console.log();
book.apply(eurowing,[323,'Rocky Balboa']);
console.log(eurowing);



const arr = [44,'George Balboa']
console.log();
book.call(lufthansa,...arr);
console.log(lufthansa);



//todo BIND EXAMPLE
// note book method was just borrowed from Lufthansa
// here bookEW is a new Function with this keyword set to eurowing

const bookEW = book.bind(eurowing);
const bookLH = book.bind(lufthansa);

//todo no need to specify here that
// the THIS keyword should be set to eurowing forever
// no need to specify eurowing as the argument
bookEW(42,'Steven William');


//todo note here the flightNum is already Set
// so only specify the name
// this is also called partial application

const bookEW23 = book.bind(eurowing,23);
bookEW23('Johnas smidhtman');
bookEW23('Martha copper');



lufthansa.planes = 300;
lufthansa.buyplane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
}

//todo here the this keyword is attached to
// the element on which the event listener is attached --- buy class
// and not on the lufthansa object...so the below code will result in error

document.querySelector('.buy').addEventListener
('click', lufthansa.buyplane)


//todo Solution indicating that the this keyword should point to lufthansa
document.querySelector('.buy').addEventListener
('click', lufthansa.buyplane.bind(lufthansa))
