//todo Dom is basically a tree structure
// for every element there is a parent child relation


//todo for selection element by className
document.querySelector('.someClassName');


//todo for selection by Id
document.querySelector('#someIDName');
document.getElementById('someIDName');


//todo adding events on the elements
// the listener funciton is a  callback function
// which will be called when the click event is fired

document.querySelector('.someClassName')
    .addEventListener('click',function () {
    console.log('click Happened');
})


//todo Manipulating the css property
document.querySelector('.someClassName').style.backgroundColor = '#60b347';
document.querySelector('.someClassName').style.width = '30rem';


//todo Manipulating Classes
// Note in the remove the . is not specified
document.querySelector('.someClassName')
    .classList.remove('someOtherClass1', 'someOtherClass2');

//todo Handling keypress events
// as soon as any key is pressed
document.addEventListener('keydown',function (e) {
    //todo e is the object that is passed as an
    // argument by the javascript

    if(e.key=='Escape'){
        console.log(`Escape was pressed`);
    }

})


