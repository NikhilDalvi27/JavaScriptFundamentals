
//todo Function Expression should be preferred

//todo Function Declaration
// Note only Declaration are HOISTED
// so we can call that function even before
// it is defined

const age1  = calcAge1(1997);

//todo this is Declaration
function calcAge1(birthYear){
    return 2021-birthYear;
}



//todo Function Expression
// Note Expression are not hoisted
// so we CANNOT call that function even before
// it is defined .....below will give error
// const age2 = calcAge2(1997);

//todo Function Expression are basically
// Function values stored in a variable

const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}

const age2 = calcAge2(1997);


console.log(age1,age2);