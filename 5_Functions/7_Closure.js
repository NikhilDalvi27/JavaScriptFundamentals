//todo Closure makes the returning function remember all the variables at the functions birth place
// Secure Booking is the birth place of the booker function
// this happens bcoz any function has the access to the variable environment
// in which the function was created
// even if the execution context of that function(secureBooking) is gone



//todo A closure makes sure that a function doesn't loose connection to
// variable that existed at the function's birth place
const secureBooking = function () {
    let passengerCount =0;
    
    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking();

booker();
booker();
booker();
