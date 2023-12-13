//---Easy
//create a function that subtracts two numbers and alerts the difference
const difference = (num1, num2) => alert(num1-num2)

//create a function that divides three numbers and console logs the quotient
function quotient (n1, n2, n3) {
    const q = n1/n2/n3
    console.log(q)
}

//create a function that multiplys three numbers and returns the product
const product = (n1, n2, n3) => n1 * n2 * n3

function turnIntoMoney() {
    const result = product(5, 10, 2)
    alert(`$${result}`)
}

//---Medium
/*
create a function that takes in three numbers. 
Add the first two numbers and 
return the remainder of dividing the sum of the first two numbers by the third number
*/
function medium(n1, n2, n3) {
    return (n1 + n2) % n3
}

//---Hard
/*
create a function that takes in 4 numbers. 

Multiply the first two numbers. 

If the product is greater than 100, 
--> add the sum of the last two numbers and 
--> console log the value. 

If the product is less than 100, 
--> subtract the difference of the last two numbers 
--> and console log the value. 

If the product is 100, 
--> multiply the first three numbers together and 
--> alert the remainder of dividing the fourth number
*/
function hard(n1, n2, n3, n4) {
    const product1 = n1 * n2
    if (product1 > 100) {
        const product2 = n3 * n4
        return product2
    } else if (product1 < 100) {
        const diff = n3 - n4
        console.log(diff)
    } else {
        const product3 = n1 * n2 * n3
        const remainder = product3 % n4
        alert(remainder)
    }
}