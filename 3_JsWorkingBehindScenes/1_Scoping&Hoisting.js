//todo Scoping -- where can we access a certain variable and where not
// lexical Scoping -- child function has the access to the parent function
// Scope -- Space or environment where a certain element is declared
// Scope of variable -- space where a certain variable can be accessed


//todo Every child Scope has access to
// all of its Parent Scopes
// and vice versa is never true


//todo types of scope
// Applicable for variables and Functions
// 1) Global Scope -- accessible anywhere in the code
// 2)Function Scope -- accessible only inside that function
// 3)Block Scope -- Everything between Curly braces....Example if and else block etc.
//                  Note that block scope is NOT applicable for VAR
//                  only applicable for LET and CONST


//todo NOTE that the variables declared with VAR
// are Function Scoped and not Block Scoped



//todo Hoisting -- Makes some Types of variable accessible/usable in
//                  the code before they are actually Declared.
//                  Behind the scene
//                  Before Execution the code is scanned for Variable Declaration


//todo Hoisting Table
//                                  Hoisted         Initial Value           Scope
//  function Declaration            Yes             Actual Function         block
//  var variables                   Yes             Undefined               Function
//  let and const variable          No              Uninitialized           block
//  function expression and arrows      Depends whether they are declared use var or (let/const)







// Variables
console.log(me);
// console.log(job);
// console.log(year);
var me = 'Jonas';
let job = 'teacher';
const year = 1991;

//todo  Function used before declaration
console.log(addDecl(2, 3));

// console.log(addExpr(2, 3));
console.log(addArrow);
console.log("here")
console.log(addArrow1(2, 3));

//todo Note only this function is hoisted
function addDecl(a, b) {
    return a + b;
}

//todo Note this wont be hoisted
// bcoz it is declared with const
const addExpr = function (a, b) {
    return a + b;
};

//todo Even this won't be hoisted bcoz
// VAR variables are hoisted to undefined
var addArrow1 = function(a, b){
    return a + b
    };

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();
var numProducts = 10;
function deleteShoppingCart() {
    console.log('All products deleted!');
}
var x = 1;
let y = 2;
const z = 3;
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);