//create a function that adds two numbers and alerts the sum
function add(num1, num2) {
    const sum = num1 + num2
    alert(sum)
}

//create a function that multiplys three numbers and console logs the product
function multiply(num1, num2, num3) {
    const product = num1 * num2 * num3
    console.log(product)
}

//create a function that divides two numbers and returns the quotient
function divide(num1, num2){
    const quotient = num1/num2
    return quotient
}

// calling functions
add(8, 8)
multiply(5, 2, 2)

const result = divide(10, 2)
console.log(result)