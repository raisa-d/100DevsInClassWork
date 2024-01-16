// *Variables*
// Create a variable and console log the value
let thisVar = 'this is a variable'
console.log(thisVar)

// Create a variable, add 10 to it, and alert the value
let num = 1
num += 10
console.log(num)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
let sub4Nums = (n1, n2, n3, n4) => console.log(n1-n2-n3-n4)

// Create a function that divides one number by another and returns the remainder
let remainder = (n1, n2) => n1%n2

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
let jumanji = (n1, n2) => {
    let sum = n1 + n2
    if(sum > 50) {
        alert(jumanji)
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
let zebra = (n1, n2, n3) => {
    let product = n1 * n2 * n3
    if(product%3 === 0) {
        alert('ZEBRA')
    }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function loopdiloop(word, num) {
    for(i = 1; i <= num; i++) {
        console.log(word)
    }
}