// todo JS doesn't have pass by reference only pass by value is there
//todo In case of object .....the address of the object is passed so it's still pass by value

const flight = 'LH234';
const jonas = {
    name :'Jonas Schemdtman',
    passport : 1213134
}

const checkIn = function(flightNum,passenger){
    // todo flight is a String and hence it is passed by value, so its not changed
    flightNum = 'LH456';

    // todo jonas Object is passed by reference hence it is changed
    // todo passenger and jonas are same object in memory heap
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport=='1213134'){
        console.log('checkedIn');
    }
    else{
        console.log('wrong passport');
    }

}



checkIn(flight,jonas);
console.log(flight);
console.log(jonas);



//todo Never do this bcoz when you manipulate the passenger Object
//todo the jonas object will also get manipulated
const passenger = jonas;

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random()*10000000);
}

//todo here passenger is manipulated, but jonas also gets manipulated
newPassport(passenger);
checkIn(flight,jonas);

