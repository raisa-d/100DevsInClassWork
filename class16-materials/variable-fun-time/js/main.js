//--- Easy
//create a variable and assign it a number
let num = 1;

//minus 10 from that number
num -= 10

//print that number to the console
console.log(num)

//--- Hard
//create a variable that holds the h1
const h1Holder = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables
h1Holder.addEventListener('click', sum)

function sum() {
    //--- Medium
    //create a variable that holds a value from the input
    let userInput = Number(document.querySelector('#danceDanceRevolution').value)

    //add 25 to that number
    userInput += 25;

    //alert that number
    alert(userInput)
    
    console.log(userInput + num)
}

// made an arrow function to do the same thing to compare
let sumArrow = () => console.log(userInput + num)