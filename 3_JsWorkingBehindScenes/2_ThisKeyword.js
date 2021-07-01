

//todo value of THIS keyword is not static
// It depends upon how the function is called,
// It's value is only assigned when the function is called

//todo Note just to DEBUG things
// you can console.log(this)


//todo NOTE for
// Arrow function the THIS keyword points
// to the parent Function
// Arrow function do not get their own this keyword

"use strict";


const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    birthYear:1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],

    //todo Note we can ONLY DO this
    // using function EXPRESSION
    // the below calcAge is called METHOD
    calcAge : function () {

        //todo Note here THIS Keyword is equal
        // to the object on which calcAge is called
        // jonas object in this case

        return 2021-this.birthYear;
    }
};

//todo THIS points to the Owner of the Function


console.log('here');
console.log(jonas.calcAge());

//todo THIS keyword pointing
// Method   -- This points to Object that is calling the method
// Simple Function   -- This points to undefined
// Arrow Function   -- This points to parent function
// Event Listener   -- This points to DOM element on which handler is attached


console.log(this);
//todo this is Simple function ...here THIS will point to undefined
const calcAge = function (birthYear) {
    console.log(2037 - birthYear);
    console.log('UNDEFINED');
    console.log(this);
};
calcAge(1991);

//todo Note this is Arrow function... here THIS will point to the PARENT function
const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    //todo Note here THIS will point
    // to the parent which is WINDOW in this case
    console.log('THIS IS NOT UNDEFINED');
    console.log(this);
};
calcAgeArrow(1980);



const jonas1 = {
    year: 1991,
    calcAge: function () {
        console.log('HERE at 76');
        console.log(this);
        console.log(2037 - this.year);
    },
};
jonas1.calcAge();
const matilda = {
    year: 2017,
};

//todo Method borrowed from Jonas
matilda.calcAge = jonas1.calcAge;

//todo Here the THIS will point
// to the matilda object
matilda.calcAge();


const f = jonas1.calcAge;
//todo here f is not not attached to
// any object hence it will result in ERROR
f();

