//todo the Catch block at the end of the THEN chain
// will handle ALMOST all (DOESN'T HANDLE 404 to be HANDLED MANUALLY USING THROW) the Errors
// no matter where they happens in the THEN chain
// there's also the Finally block that will run
// no matter whether the promise is Fulfilled or Rejected
// useful for task such as hiding the loading rotating spinner


const getCountryData = function (country) {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        .then(function(response) {
            console.log(response);

            //todo THIS needs to be handled manually
            // as CATCH block will not HANDLE this
            if(!response.ok){

                //todo IMP NOTE
                // This will make the promise return
                // into the Rejected state

                throw  new Error(`Country not Found ${response.status}`);
            }

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
        .catch(function (error) {

            //todo THIS WILL handle all the errors
            // no matter where they occur

            alert(error);
        })
        .finally(function () {
            console.log(`This will always be executed`);
        })
}

// getCountryData('India');

getCountryData('hdsafkj');