//---Easy
//create a function that subtracts two numbers and alerts the difference
const subTwoNums = (n1, n2) => console.log(n1 - n2);
subTwoNums(10, 8) // 2

//create a function that divides three numbers and console logs the quotient
const divideThree = (n1, n2, n3) => console.log(n1/n2/n3);
divideThree(12, 4, 3) // 1

//create a function that multiplys three numbers and returns the product
const multiplyThree = (n1, n2, n3) => n1*n2*n3;
let result = multiplyThree(2, 5, 7)
console.log(result) // 70

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function medium(n1, n2, n3) {
    return (n1 + n2)%n3
}
console.log(medium(90, 34, 3)) // remainder of 1

//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less than 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function hard(n1, n2, n3, n4) {
    const product = n1 * n2;

    if(product > 100) {
        console.log(product + n3 + n4);

    } else if (product < 100) {
        console.log(product - n3 - n4);

    } else {
        alert((n1 * n2 * n3) % n4);
    };
};

hard(5, 4, 3, 2) // 15
hard(100, 4, 3, 2) // 405
hard(100, 1, 3, 2) // 0