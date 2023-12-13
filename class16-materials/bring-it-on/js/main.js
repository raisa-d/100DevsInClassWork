// *Variables*
// Create a variable and console log the value
const var1 = 1;
console.log(var1)

// Create a variable, add 10 to it, and alert the value
let value = 2
value += 10
// alert(value)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subFourNums(n1, n2, n3, n4) {
    const answer = n1 - n2 - n3 - n4
    alert(answer)
}

// Create a function that divides one number by another and returns the remainder
function division(n1, n2) {
    return n1 % n2
}
// arrow function version
let remainder = (n1, n2) => n1 % n2

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(n1, n2) {
    const sum = n1 + n2
    if (sum > 50) {
        alert('Jumanji')
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function zebra(n1, n2, n3) {
    const product = n1 * n2 * n3
    if (product % 3 === 0) {
        alert('ZEBRA')
    }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function word(word, number) {
    for(let i=1; i <= number; i++) {
        console.log(word)
    }
}