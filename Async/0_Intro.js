//todo Asynchronous code is nonblocking
// Execution doesn't wait for a asynchronous task to finish
// We need a callback function to make a code asynchronous
// however not all the callback methods make code asynchronous ... for eg array map method



//todo Synchronous Example
const p = document.querySelector('.p');
p.textContent =    'My name is Jonas';

//todo This will create a popup Window and block
// the further lines of code until we click OK on the alert
// this is the problem with the synchronous code
alert('Text set!');


p.style.color = 'red';



//todo Asynchronous Example
const p = document.querySelector('.p');

//todo This will run in the background and that
// callback function will be called once the timer is finished

setTimeout(function () {
    p.textContent = 'My name is Jonas!';
},5000);


//todo  This statement won't wait for the settimeout to finish
p.style.color = 'red';




//todo other async example
const img = document.querySelector('.dog');

//todo this is by default implemented  asynchronously in javascript
// so we add a eventListener to it
img.src = 'dog.jpg';

//todo  callback fired when the load event is emited
// here the image is loading asynchronously in background and we are waiting for it to happen
img.addEventListener('load',function () {
    img.classList.add('fadeIn');
})

p.style.width = '300px';