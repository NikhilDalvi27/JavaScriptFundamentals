
//todo here it's difficult to reference
// the element by the index so create an Object
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

//todo Note that we can also have
// value as an Object

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    birthYear:1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],

    //todo Note we can ONLY DO this
    // using function EXPRESSION
    calcAge : function () {

        //todo Note here THIS Keyword is equal
        // to the object on which calcAge is called
        // jonas object in this case

        return 2021-this.birthYear;
    }
};

console.log('here');
console.log(jonas.calcAge());

//todo to access the properties
// using . Notation and the Bracket notation

//todo prefer this
// when you know the keyname
console.log(jonas.lastName);




//todo above is same as
// Note here the property is to be passed as String
// prefer this when the keyname is
// Dynamically Calculated...access like an array
console.log(jonas['lastName']);

console.log();

const nameKey = 'Name';
console.log(jonas['first'+ nameKey]);
console.log(jonas['last'+ nameKey]);

//todo this is the INPUT for property of Jonas
// at the runtime
const interestedIn = 'job';

//todo Note that here we ALREADY have the
// key computed but EVEN THEN we CANNOT
// access it using the DOT NOTATION
console.log(jonas.interestedIn);
console.log(jonas[interestedIn]);


//todo for adding a new KEY DYNAMICALLY

jonas.location = 'Portugal';
jonas['twiiter']= '@twiiter.com';

console.log(jonas);


//todo ShortHand Syntax
const name = 'Andrew'
const userAge = 27;

const user ={
    name,   //todo note this is same as  name : name
    age : userAge,
    location : 'Philadelphia'
}

//todo this works bcoz there's a variable name same as the property name