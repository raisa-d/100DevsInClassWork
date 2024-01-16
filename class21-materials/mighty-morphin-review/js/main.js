// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday;
favHoliday = 'Halloween'.toUpperCase()
console.log(favHoliday)

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let str = 'mermaids'
console.log(str.slice(-3))

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
let absVal = (n1, n2, n3, n4, n5) => {
    let diff = 100 - n1 - n2 - n3 - n4 - n5
    console.log(Math.abs(diff))
}

absVal(2, 5, 10, 1, 6)

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
let minMax = (n1, n2, n3) => {
    let min = Math.min(n1, n2, n3)
    let max = Math.max(n1, n2, n3)
    console.log(`Lowest number: ${min}\nHighest number: ${max}`)
}

minMax(6, 19, 20)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
// get a random probability between 0 and 1
let headsOrTails = _ => Math.random() > 0.5 ? 'heads' : 'tails'

console.log(headsOrTails())

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
let logResult = n => {
    for (i = 1; i <= n; i++) {
        // calling heads or tails each time loop runs
        let result = headsOrTails()
        console.log(result)
    }
}

logResult(10)