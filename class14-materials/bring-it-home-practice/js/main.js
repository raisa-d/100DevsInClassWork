// *Variables*
// Create a variable and console log the value
const a = 5
console.log(a)

// Create a variable, add 10 to it, and alert the value
let b = 0
b += 10
alert(b)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function math(n1, n2, n3, n4) {
    const difference = n1 - n2 - n3 - n4
    alert(`Difference: ${difference}`)
}

// Create a function that divides one number by another and returns the remainder
function remainder(n1, n2) {
    const r = n1%n2
    return r
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(n1, n2) {
    const num = n1 + n2
    if (num > 50) {
        alert("Jumanji")
    }
    // way I would do it with ternary operator
    // const result = num > 50 ? alert("jumanji") : console.log('meh')
}

// Create a function that multiplies three numbers and if the product is divisible by 3 alert ZEBRA

// practicing arrow functions for result
const result = (n1, n2, n3) => n1 * n2 * n3

function zebra(n1, n2, n3) {
    const product = result(n1, n2, n3)
    if (product % 3 === 0) {
        alert('zebra')
    } else {
        alert('not divisible by three')
    }
}
