

const getJson = function (url, errorMsg = 'SomeThing Went Wrong') {
    return fetch(url).then(function (res) {
        if(!res.ok)
            throw new Error(`${errorMsg} ${res.status}`);
        return res.json();
    })
}

const get3Countries = async function(c1,c2,c3){
    try {

        //todo This will happen sequentially
        // even if the output of next
        // is not dependent on the previous
        // will lead to higher execution time..
        // see waterfall model in the Network Tab

        const [data1] = await getJson(`https://restcountries.eu/rest/v2/name/${c1}`);
        const [data2] = await getJson(`https://restcountries.eu/rest/v2/name/${c2}`);
        const [data3] = await getJson(`https://restcountries.eu/rest/v2/name/${c3}`);

        console.log([data1.capital,data2.capital,data3.capital])
    }
    catch (e) {
        
    }
}


 get3Countries('portugal','canada','egypt');


//todo run either above or below one
// at a time to get the difference

//todo Promise.all...
// input is the Array of promise
// and output is a Single Promise
// which will run all the promise in the array
// at SAME TIME

//todo Note that even if one of the promise rejects
// then whole promise.all will reject


const get3CountriesNew = async function(c1,c2,c3){
    try {


        //todo use Promise.allSettled
        // if you want the result of all settled promise
        // AND it's fine that any of the input promise is REJECTED

        //todo This will happen Parallely
        // and output is an Array containing output of
        // all the Promises

        const data = await Promise.all([
            getJson(`https://restcountries.eu/rest/v2/name/${c1}`),
            getJson(`https://restcountries.eu/rest/v2/name/${c2}`),
            getJson(`https://restcountries.eu/rest/v2/name/${c3}`)
        ])

        // const [data1] = await getJson(`https://restcountries.eu/rest/v2/name/${c1}`);
        // const [data2] = await getJson(`https://restcountries.eu/rest/v2/name/${c2}`);
        // const [data3] = await getJson(`https://restcountries.eu/rest/v2/name/${c3}`);


        console.log('Promise all');
        console.log(data);
    }
    catch (e) {

    }
}

get3CountriesNew('portugal','canada','egypt');



//todo Promise.race ...
// First SETTLED promised is returned
// no matter whether it is REJECTED or FULFILLED
// used to apply a timeout to fetch request


const timeOut = function (sec) {

    // todo building a promise
    return new Promise(function (_,reject) {
        setTimeout(function () {

            //todo since Resolve or Reject is used for
            // returning the value of the SETTLED promise
            reject(new Error(`Request took too long`));
        },sec*1000)
    })
}

Promise.race([
    getJson(`https://restcountries.eu/rest/v2/name/canada`),
    timeOut(2)
]).then(res=>{
    console.log(`Request Successful`);
    console.log(res)})
    .catch(err=> console.error(err));



Promise.allSettled([
    Promise.resolve('Success'),
    Promise.reject('Error'),
    Promise.resolve('Success')
]).then(res=> console.log(res));
