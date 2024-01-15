// *Variables*
// Declare a variable, assign it a boolean, and alert the value
const haveACat = true;
console.log(haveACat)

// Declare a variable, reassign it to your favorite color, and console log the value
let favColor = 'white';
favColor = 'purple';
console.log(favColor)

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
const complicated = (n1,n2,n3,n4) => {
    return (n1+n2+n3)/n4
}

console.log(complicated(21, 10, 7, 2))

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
let other = (n1,n2) => console.log(n1**n2)
let otherWay = (n1,n2) => console.log(Math.pow(n1, n2))

other(2, 7)

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string
let thisFunction = (boolean, str) => {
    if (boolean) {
        alert(str)
    }
    console.log(str)
}

const ternFunc = (b, s) => b ? alert(s) : console.log(str)

// thisFunction(haveACat, 'mermaids are amazing')

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
function fizzBuzz(n1) {
    for(let i = 1; i <= n1; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log('fizzbuzz')
        } else if (i % 3 === 0) {
            console.log('fizz')
        } else if (i % 5 === 0) {
            console.log('buzz')
        } else {
            console.log(i)
        }
    }
}

fizzBuzz(20)