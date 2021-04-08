//todo Callback Pattern
const doworkCallback = (callback)=>{
    setTimeout(()=>{

        //todo note the first parameter of callback
        // is error and the second is result
        callback(undefined,[2,4,5,6]);
    },2000)
}

doworkCallback((error,result)=>{
    if(error){
        return console.log(error);
    }
    console.log(result);
})


//todo Promise Pattern

const doWorkPromise  = new Promise(((resolve, reject) => {
    setTimeout(()=>{
        //todo Note either of the resolve or reject is called
        // and the promise is returned
        resolve([7,4,1,2]);
        //reject('Things went wrong');
    },2000)
}))


//todo on resolve the THEN block is called
// on reject Catch block is called ...
// seperate functions called on seperate events

doWorkPromise.then((result)=>{
    console.log('Success!!',result);
}).catch((error)=>{
    console.log('Error!',error)
})