// Class expression
// const PersonCl = class {}

//todo THIS is a cleaner syntax
// Class declaration
// There's no need to use the Getters and the Setters

class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // todo Instance methods
    //  Methods will be ADDED to .prototype property
    //  and not the Objects themselves
    //  so only one copy of the method is present

    //todo Note here calcAge is not having
    // Function Keyword
    calcAge() {
        console.log(2037 - this.birthYear);
    }
    greet() {
        console.log(`Hey ${this.fullName}`);
    }

    //todo This is getter
    // which is defined using
    // the get keyword

    get age() {
        return 2037 - this.birthYear;
    }
    // Set a property that already exists
    set fullName(name) {
        if (name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }
    get fullName() {
        return this._fullName;
    }
    // Static method
    static hey() {
        console.log('Hey there 👋');
        console.log(this);
    }
}
console.log("first");
const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);
console.log(jessica.__proto__ === PersonCl.prototype);
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

console.log("here");

// jessica.

//todo
// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1965);
// PersonCl.hey();


//todo ACTUAL INHERITANCE

class StudentCl extends PersonCl {

    //todo If the number of Params for child constructor
    // are same as that of the parent constructor
    // then EVEN if we dont write this constructor in the child class
    // the code will still work

    constructor(fullName, birthYear, course) {
        //todo Always needs to happen first!
        super(fullName, birthYear);

        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }

    //todo this is method overriding
    calcAge() {
        console.log(
            `I'm ${
                2037 - this.birthYear
            } years old, but as a student I feel more like ${
                2037 - this.birthYear + 10
            }`
        );
    }
}
const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
