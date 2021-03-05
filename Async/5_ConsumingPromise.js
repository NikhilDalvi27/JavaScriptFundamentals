//todo Promise is consumed using THEN keyword
// and it is handled using a callback function


const getCountryData = function (country) {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        .then(function(response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        });
}
getCountryData('portugal');
