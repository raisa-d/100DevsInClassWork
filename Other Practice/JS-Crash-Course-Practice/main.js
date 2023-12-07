// Creating a Form Script

// set variables for a bunch of things from DOM
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// listen for a submit event on form
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    // form validation. don't want it to submit unless both fields are filled out
    // if the nameInput or emailInput are equal to an empty string, then we want to
    // give user a message they need to fill out fields
    if(nameInput.value === '' || emailInput === '') {
        // add class error for styling
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        // want error to disappear after 3 seconds using setTimeout function which takes a function as the parameter
        // setTimeout takes in second parameter of time in ms it should fire off
        setTimeout(() => msg.remove(), 3000);

        // if successful
    } else {
        // want to add it as a list item into ul
        // create a list item
        const li = document.createElement('li');

        // insert li into DOM by adding a text node with the input values
        li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

        // need to append li to the ul
        // appendChild function adds something into whatever it's attached to
        userList.appendChild(li);

        // clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
    
    // console.log(nameInput.value);
}

// console.log();

/* 
if you want an application where you save data, need something on back end
that connects to a database (Node.js, Python, PHP, etc.)
you'd send requests from front end using FetchAPI or Ajax, for example
local storage: can store data in user's browser
*/