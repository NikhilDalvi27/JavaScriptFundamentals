//todo Immediately Invoked Function Expression
// it's an expression which will call itself
// it's also useful for creating a Private Scope
// used for data encapsulation and privacy




//todo note that the function is first wrapped in the ()
// and then it is called
(function () {
    console.log('This will run itself');
    const isPrivate=23;
})();

//todo this will give an Error
console.log(isPrivate);

