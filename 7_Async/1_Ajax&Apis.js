//todo AJAX stands for Asynchronous JavaScript and XML
// It allows us to communicate with the web servers in an Asynchronous Way,
// client doesn't have to wait for the web server to respond
// It allows to request data from web servers dynamically... without having to reload the page


//todo Api stands for Application Programming Interface
// it is a piece of software that can be used by other piece of software
// to exchange data with each other


//todo OLD SCHOOL FOR AJAX request

let request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/name/portugal');
request.send();

//todo the below code will give error
// bcoz the code runs asynchronously
// data = request.send();


//todo once the request is completed it will emit the LOAD event
request.addEventListener('load',function () {

    //todo here the THIS keyword refers to the request
    // and the data is destructured
    const [data]  = JSON.parse(this.responseText);
    console.log(data);
})



//todo This is the new Way using Fetch and Promise
// in this case the fetch function returns a Promise
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