

//todo lect 207

//todo only difference between normal function and Constructor
// is that we call the Constructor Function using the NEW keyword


//todo when we call a function using the new operator
// following steps happen behind the scene
// 1) New Empty Object {} is Created
// 2)Function is called and the
// THIS keyword is set to Newly Created Object in step 1
// this={}
// 3)Newly Created Object {} is linked to Constructor functions prototype property
// ...will create the __proto__ property (for new object)
// and point it to constructors prototype property
// eg   jonas.__proto__ === Person.prototype
// 4)Function automatically returns this newly created Object {}


//todo this is not a class but a Constructor Function
// here we cannot use an arrow function bcoz it doesn't have THIS keyword
const Person = function (firstName, birthYear) {

    console.log(this);
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // todo Never create a method inside a constructor
    //  bcoz each new instance will have a copy of this Method
    //  which will degrade the performance

    // this.calcAge = function () {
    //   console.log(2037 - this.birthYear);
    // };

    //todo Note that there's no need of returning anything
    // from the constructor
};
const jonas = new Person('Jonas', 1991);
console.log(jonas);
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

//todo we can create multiple instances(Objects) of that
// Class using the new Keyword
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);


//todo VERY IMPORTANT


//todo Prototype
// Each and Every function (also including Constructor) in JavaScript
// Automatically has a property called Prototype

//todo Every object that is created using certain Constructor Function
// will get access to all the Method and Properties
// that is defined on that Constructors Prototype

//todo eg Note below is new Method -- calcAge Defined
// on the Prototype of Constructor named person
// now calcAge method will be available
// to each Object created using the person constructor
// This will create only one copy of the function inside the Person.prototype
// and all the object created using this Constructor
// will be able to use calcAge method



//todo Person.prototype is not the prototype of Person
// but it's the prototype of all the objects that
// are created using through Person constructor

//todo Person.prototype is an object
// and inside that object we are defining
// a calcAge function

//todo ALL THIS IS SAME AS CREATING A PERSON CLASS
// WITH A CONSTRUCTOR AND
// ADDING A CALCAGE FUNCTION INSIDE PERSON CLASS AND NOT THE CONSTRUCTOR ITSELF
// SO THERE WILL BE JUST ONE COPY OF THAT METHOD
// AND ALL THE CHILD CLASS WILL BE ABLE TO ACCESS IT

Person.prototype.calcAge =function() {

    //todo here this will be set to the Object calling this method
    console.log(2037- this.birthYear)
}

//todo here calcAge won't be the property of jonas
// but it will be able to access it bcoz of prototype chain
// If a property or method is not found in a certain object
// then Javascript will look into object's  prototype
jonas.calcAge();


//todo Each Object has a SPECIAL PROPERTY called __proto__
// __proto__ is the Prototype of Jonas
// ProtoType of jonas is equal to the prototype property of its Constructor
// Person in this case

console.log(107);
console.log(jonas.__proto__);

console.log(jonas.__proto__ === Person.prototype);


console.log(jonas instanceof Person);

console.log("here");
console.log(jonas);
console.log(Person.prototype);


//todo Person.prototype.constructor points back
// to Person itself

console.log("there");
console.log(Person.prototype.constructor);
console.log(Person);

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

//todo hasOwnProperty method is borrowed from
// Object.prototype ...see the prototype chain

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));



Person.hey = function () {
    console.log('Hey there 👋');
    console.log(this);
};
Person.hey();

const arr = [3, 6, 6, 5, 6, 9, 9]; // new Array === []

//see this in browser
console.log(arr.__proto__);

//todo Array is the constructer
console.log(arr.__proto__ === Array.prototype);


