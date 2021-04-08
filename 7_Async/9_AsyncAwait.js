


//todo ASYNC function will ALWAYS
// return a Promise
// so after calling a ASYNC FUNCTION from a normal SYNC FUNCTION
// we need to store the value returned by ASYNC FUNCTION
// by using THEN only

//todo There should ALWAYS be a try catch in the ASYNC FUNCTION

//todo AWAIT can only be used inside the ASYNC function

//todo ASYNC AWAIT is only about CONSUMING PROMISE
// the way we BUILD THEM is NOT INFLUENCED in any way
// that means you will have to BUILD the promise in the same OLD WAY




//todo Here Error Handling is done using try catch
// the way catch block was present after the THEN method


//todo Note that whatever is front of await is
// mostly the code that will take time(asynchronous)
// generally await is followed by the Promise


//todo await will stop the Code Execution at that point
// until the promise is Fulfilled

//todo Declaring a function to be async
// makes it run in the Background
// and Hence adding a await statement inside Async
// doesn't actually block the code execution


//todo This function will return a Promise
const whereAmI = async function(country){

    //todo Note here res is assigned value only after
    // the Fetch Promise is fulfilled
    // so no need of consuming promise using THEN

    try {

        const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`)

        //todo if 403 error then also the
        // fetch function will result in Promise in the resolved State
        // so we need to throw it manually
        if(!res.ok)
            throw  new Error('Problem getting location data');

        const data = await res.json();
        // console.log(data);

        //todo Above is exactly same as
        return fetch(`https://restcountries.eu/rest/v2/name/${country}`)

    } catch (err) {

        console.log(err);

        //todo Rethrowing error
        // If this is not done then
        // since the err is handled here itself
        // while consuming promise the error will
        // always go inside the then function
        // and not the catch
        // it's upto YOU for implementation

        throw err;
    }
}

//todo This is how you need to use ASYNC function
// from a normal SYNC function

whereAmI('portugal')
    .then(res=>{
        console.log("here");
        return res.json();
    })
    .then(data=>{
        console.log(data);
    })
    .catch(err=>{
        console.log(err);
    })


// whereAmI('portugal');
console.log('FIRST');



//todo More Examples
const add = (a,b)=>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(a+b);
        },2000);

    } )
}

const doWork = async ()=>{
    const sum = await add(1,3);
    console.log(sum);
    const sum2 = await add(sum,5);
    console.log(sum2);
    const sum3 = await  add(sum2,6);
    return sum3;
}


doWork().then(result=>{
    console.log(result);
}).catch((e)=>{
    console.log(e);
})