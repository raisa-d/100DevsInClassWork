//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward to


//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

// event listener on the H1
document.querySelector('h1').addEventListener('click', checkAge);

function checkAge() {
    // store user input as variable age, make sure it's a number
    const age = Number(document.querySelector('input').value);
    // conditional
    const res = age < 16 ? "You can't drive" : age < 18 ? "You can't hate from outside the club, because you can't even get in" : age < 21 ? "You can't drink" : age < 25 ? "You can't rent affordably" : age < 30 ? "You can't rent fancy cars affordably" : "There's nothing to look forward to";
    // insert result into paragraph on DOM
    document.querySelector('p').innerText = res;
};