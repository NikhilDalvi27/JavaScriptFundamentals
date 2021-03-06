//todo THEN method will always return a promise
// no matter if we return a simple value or an actual promise
// syntax   .then ( function(){
//                      somecode
//                  return SOME_PROMISE_1})
//          .then(  function(RESOLVED_VALUE_OF_PROMISE_1){        NOTE
//                      somecode
//                      return SOME_PROMISE_2
//                  })
//          and





//todo the promise consumption should be a flat chain like below

const getCountryData = function (country) {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        .then(function(response) {
            console.log(response);

            //todo Note that response.json() is a promise
            return response.json();
        })
        .then(function (data) {
            console.log('Actual country');
            console.log(data);
            const neighbour = data[0].borders[0];

            if(!neighbour)
                return;

            return fetch(`https://restcountries.eu/rest/v2/name/${neighbour}`)
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log('neighbour');
            console.log(data);
        })
}

 // getCountryData('portugal');


//todo Below code is some common mistake


const getCountryData1 = function (country) {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        .then(function(response) {
            console.log(response);

            //todo Note that response.json() is a promise
            return response.json();
        })
        .then(function (data) {
            console.log('Actual country');
            console.log(data);
            const neighbour = data[0].borders[0];

            if(!neighbour)
                return;

            //todo  NOTE
            // This will WORK BUT
            // result in a CALLBACK HELL
            return  fetch(`https://restcountries.eu/rest/v2/name/${neighbour}`)
                 .then(function (response) {
                 return response.json();
             })
        })
        .then(function (data) {
        console.log('neighbour');
        console.log(data);
        })
}

getCountryData1('portugal');