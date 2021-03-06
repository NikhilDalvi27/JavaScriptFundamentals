//todo Functions are just another type of objects


//todo Higher Order Functions
// It's a Function that recieves other Function as an Argument
// or a function that returns a function or both


//todo CALLBACK
// Functions passed as Argument to other Function
const greet = ()=>console.log('Hey Jonas');

//todo Here addEventListener is the HigherOrder Function
// and greet is the callback function
btnClose.addEventListener('click',greet);

//todo It's like greet function saying Hey don't call me NOW
// but CALL ME BACK ONCE YOU ARE READY



//todo Functions can be stored in variables or Object Properties
const add  = (a,b)=>a+b;
console.log(add(4,6));

//todo Functions stored as Object Property
const counter ={
    value:23,
    inc:function () {
        this.value++;
    }
}

//todo We can also call inbuilt methods on Functions
counter.inc.bind(someObject);





//todo Functions can be returned as a return type from other functions





