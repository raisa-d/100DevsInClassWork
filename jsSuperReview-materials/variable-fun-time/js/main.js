//--- Easy
//create a variable and assign it a number
let num = 10;

//minus 10 from that number
num -= 10

//print that number to the console
console.log(num)

//--- Hard
//create a variable that holds the h1
const h1 = document.querySelector('h1')

//add an event listener to that element that console logs the sum of the two previous variables
h1.addEventListener('click', addTwo)

function addTwo() {
    //--- Medium
    //create a variable that holds a value from the input
    let inputNum = +document.querySelector('#danceDanceRevolution').value

    //add 25 to that number
    inputNum += 25

    //alert that number
    alert(inputNum)

    console.log(inputNum + num)
}