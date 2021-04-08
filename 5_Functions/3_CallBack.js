//todo Callback is just a Function passed as a Argument to Another Function
// with an Intention of being called laterOn(Intention not necescarrily)


//todo Callback Function allow us
// to create Abstraction here the transformer
// function doesn't care about the function that is passed to it


const oneWord = function (str) {
    return str.replace(/ /g,'').toLowerCase();
}

const upperFirstWord =function (str) {
    //todo Note the destructuring
    const [first,...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}


//todo Higher Order Function
const transformer = function (str,fn) {
    //todo note it's backticks, $ and {}

    console.log(`Original String: ${str}`);
    //todo Note that transformer function is
    // calling the fn that is passed as parameter
    console.log(`Transformed String :  ${fn(str)}`);
    console.log(`Transformed by : ${fn.name}`);

}

//todo Note that we are only passing the Function Value here
// and not calling the Function
// We don't have to call, It's the transformer function that will call the upperWord Function
transformer('Javascript is best',upperFirstWord);
console.log();
transformer('Javascript is best',oneWord);


//todo Below is wrong...here we have called the function Ourselves Manually
// transformer('Not good',upperFirstWord())


//Other Example

const greet = function () {
    console.log("Hey!!");
}
//todo Comment this for running
 document.body.addEventListener('click',greet);

const arr = ['Jonas','Martha','Adam'];
arr.forEach(greet);


//todo Another Callback Example
const geoCode = (address,callback)=>{

    //todo Note the issue is bcoz
    // we cannot return from the setTimeOut Function
    setTimeout(()=>{
        const data = {
            latitude:0,
            longitude:0
        }
        callback(data);
    },2000)

}

geoCode('Mumbai',(data)=>{
    console.log(data);
})


//todo Another Example

const add = (a,b,callback)=>{
    //todo Note the issue is bcoz
    // we cannot return from the setTimeOut Function
    setTimeout(()=>{
        callback(a+b);
    },2000)
}

add(1,4,(sum)=>{
    console.log(sum);
})


