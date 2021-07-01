

//todo here the callback function is called the Executor Function,
// Executor Function has 2 arguments resolve or reject
// and it's the function that will produce the FUTURE VALUE

//todo Note that RESOLVE and REJECT are used for returning the value
// of the promise that is SETTLED


const lotteryPromise = new Promise( function (resolve,reject) {

    console.log(`Lottery Draw is happening`);

    //todo SetTimeOut is to simulate the Async Behaviour
    setTimeout(function () {
        if(Math.random()>=0.5){
            //todo Note that whatsoever is passed to resolve...(YOU WIN) in this case
            // that will be the input parameter (res) to the THEN method
            resolve(`YOU WIN `);
        }
        else {
            //todo throwing Error will be handled in the Catch Block
            reject(new Error(`YOU LOOSE`));
        }
    },2000)



})

//todo here we consume the promise
// the input parameter is the result of
// either resolve or reject function


lotteryPromise.then(function (res) {
    console.log(res);
}).catch(function (err) {

    console.error(err);
})


//todo Promisifying setTimeout

const wait = function(seconds){

    return new Promise(function (resolve,reject) {

        //todo Note only the resolve is used as callback function
        // for the setTimeout
        setTimeout(resolve,1000)
    })
}

wait(1)
.then(function () {
    console.log(`1 second passed`);

    //todo note here new promise is returned
    return wait(1);
})
.then(function () {
    console.log(`2 second passed`);

    return wait(2);
})
.then(function () {
    console.log(`3 second passed`);

    // return wait(3);

})


//todo to resolve the Promise immediately

Promise.resolve('abc').then(x => console.log(x));