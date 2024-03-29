//--- Easy
//create a variable and assign it a number
let num = 1

//minus 10 from that number
num -= 10

//print that number to the console
console.log(num)

//--- Medium
//create a variable that holds a value from the input
// let input = Number(document.querySelector('#danceDanceRevolution').value)

//add 25 to that number
// input += 25

//alert that number
// console.log(input)

//--- Hard
//create a variable that holds the h1
const h1Holder = document.querySelector("h1")

//add an event listener to that element that console logs the sum of the two previous variables
h1Holder.addEventListener('click', sum)

function sum() {

    //create a variable that holds a value from the input
    let input = Number(document.querySelector('#danceDanceRevolution').value)
    
    //add 25 to that number
    input += 25
    
    console.log(input + num)
}