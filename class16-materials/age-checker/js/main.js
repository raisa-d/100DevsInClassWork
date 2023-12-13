

//--- Harder
//On click of the h1
const h1Holder = document.querySelector('h1').addEventListener('click', checkAge)

function checkAge() {
    
    //Take the value from the input
    let age = Number(document.querySelector('#danceDanceRevolution').value)

    // where to place result
    let showResult = document.querySelector('p')
    
    //Create a conditonal that checks their age
    //If under 16, tell them they can not drive
    if (age < 16) {

        //Place the result of the conditional in the paragraph
        showResult.innerText = 'You can\'t drive...'

    //If under 18, tell them they can't hate from outside the club, because they can't even get in
    } else if (age < 18) {
        showResult.innerText = 'You can\'t hate from outside the club since you can\'t even get in.'

    //If under 21, tell them they can not drink
    } else if (age < 21) {
        showResult.innerText = 'You can\'t drink bruh,,,'

    //If under 25, tell them they can not rent cars affordably
    } else if (age < 25) {
        showResult.innerText = 'You can\'t rent cars affordably.'

    //If under 30, tell them they can not rent fancy cars affordably
    } else if (age < 30) {
        showResult.innerText = 'You can\'t rent fancy cars affordably.'

    //If under over 30, tell them there is nothing left to look forward to
    } else {
        showResult.innerText = 'There is nothing left to look forward to...except for getting wiser and older :)'
    }   
}